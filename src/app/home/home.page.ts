import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import *  as L from 'leaflet';
import 'leaflet.heat/src/HeatLayer.js';
import 'leaflet.timeline'
import 'timeLineSlider/src/leaflet-timeline-slider.js'

import { TransferState } from '@angular/platform-browser';
//import { EADDRNOTAVAIL } from 'constants';
//import { type } from 'os';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  lenguasLayer = ['Sus abuelos', 'Sus padres', 'Los entrevistados', 'Sus hijos'];

  public map: L.Map;
  comunidades: Array<any>
  lenguas: Array<String>
  camposHeat: Array<String>
  heatLayers: any;
  preguntasForm = ['52', '53', '54', '55'];

  constructor(private http: HttpClient) {
    this.comunidades = [];
    this.lenguas = [];
  }
  ionViewDidEnter() {
    this.loadmap();
    this.getComunidadesShape();
    //this.actualizarCapa();
  }

  loadmap() {
    this.map = new L.Map('map');
    var OpenStreetMap = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
      maxZoom: 18,
      layers: [OpenStreetMap]
    }).addTo(this.map);
  }
  //Función para obtener el centro de un polífgono
  getCentro(arr) {
    var twoTimesSignedArea = 0;
    var cxTimes6SignedArea = 0;
    var cyTimes6SignedArea = 0;
    var length = arr.length

    var x = function (i) { return arr[i % length][0] };
    var y = function (i) { return arr[i % length][1] };

    for (var i = 0; i < arr.length; i++) {
      var twoSA = x(i) * y(i + 1) - x(i + 1) * y(i);
      twoTimesSignedArea += twoSA;
      cxTimes6SignedArea += (x(i) + x(i + 1)) * twoSA;
      cyTimes6SignedArea += (y(i) + y(i + 1)) * twoSA;
    }
    var sixSignedArea = 3 * twoTimesSignedArea;
    return [cyTimes6SignedArea / sixSignedArea, cxTimes6SignedArea / sixSignedArea];
  }

  getComunidadesShape() {
    this.http.get('assets/shapeFiles/ddbb.json').subscribe((json: any) => {
      const tempObjects = [];
      const tempLeng = [];
      var comunidad = L.geoJson(json, {
        onEachFeature: function (feature) {
          tempObjects.push(feature);
          if (tempLeng.indexOf(feature.properties.LENGUA_L1) === -1) {
            tempLeng.push(feature.properties.LENGUA_L1)
          }
        },
      });
      this.map.fitBounds(comunidad.getBounds());
      this.comunidades = tempObjects;
      this.lenguas = tempLeng;
      this.getLanguages(this.lenguas);
      this.heatMapLayer("Kichwa", '52')
    })
  }


  heatMapLayer(lenguaLayer, numForm) {
    this.heatLayers = {};
    for (let num in this.preguntasForm) {
      this.heatLayers[num] = L.layerGroup();
      for (let c in this.comunidades) {
        if (lenguaLayer === this.comunidades[c].properties.LENGUA_L1) {
          var L1 = parseInt(this.comunidades[c].properties.L1_52);
          var cast = parseInt(this.comunidades[c].properties.CAST_52);
          var Bili = parseInt(this.comunidades[c].properties.BILI_52);
          var otra = parseInt(this.comunidades[c].properties.OTRA_52);
          var nr = parseInt(this.comunidades[c].properties.NR_52);
          var total = L1 + cast + Bili + otra + nr;
          var result = 1 * (L1 + Bili) / total
          var centro = this.getCentro(this.comunidades[c].geometry.coordinates[0][0]);
          this.heatLayers[num].addLayer(L.heatLayer([[centro[0], centro[1], result]]))
        }
      }
    }
    return this.heatLayers;
  }




  //Dibujamos un control con las lenguas principales 
  getLanguages(lengs) {
    var lenguas = {
    }
    for (var i = 0; i < lengs.length; i++) {
      lenguas[lengs[i]] = []
      for (var j = 0; j < this.comunidades.length; j++) {
        if (this.comunidades[j].properties.LENGUA_L1 == lengs[i]) {
          lenguas[lengs[i]].push(this.comunidades[j])
        }
      }
      lenguas[lengs[i]] = L.geoJson(lenguas[lengs[i]], {
        onEachFeature: function (feature, featureLayer) {
          featureLayer.bindPopup(feature.properties.PARROQUIA);
          featureLayer.on('mouseover', function (e) {
            this.openPopup();
          });
          featureLayer.on('mouseout', function (e) {
            this.closePopup();
          });
        },
        style: function (layer) {
          return {
            fillOpacity: 0.6,
            color: '#fff',
            weight: 2,
          }
        }
      });
    }
    var controlLenguas = L.control.layers(lenguas, null, {
      collapsed: true,
    })
    this.map.addControl(controlLenguas);

    L.control.timelineSlider({
      timelineItems: ["Abuelos", "Padres", "Entrevistados", "Hijos"],
      changeMap: this.changeGeneration,
      extraChangeMapParams: { exclamation: "Hello World!" }
    }).addTo(this.map);
  }

  actualizarCapa() {
    var response = this.map.on('baselayerchange', function (e) { return e.name })
  }

  changeGeneration(label) {
    this.heatMapLayer('Kichwa', 55);
    if (label.label == "Abuelos") {
      alert('1')
      this.heatLayers[0].addTo(this.map);
    } else if (label.label == "Padres") {
      this.map
      
    } else if (label.label == "Entrevistados") {
      alert('3')
      
    } else if (label.label == "Hijos") {
      alert('4')
     
    }
  }

  //


}

