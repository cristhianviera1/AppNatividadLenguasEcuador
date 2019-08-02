import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import *  as L from 'leaflet';
import 'leaflet.heat/src/HeatLayer.js';
import 'leaflet.timeline'
import 'timeLineSlider/src/leaflet-timeline-slider.js'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  lenguasLayer = ['Sus abuelos', 'Sus padres', 'Los entrevistados', 'Sus hijos'];

  map: L.Map;
  comunidades: Array<any>
  lenguas: Array<String>
  camposHeat: Array<String>
  constructor(private http: HttpClient) {
    this.comunidades = [];
    this.lenguas = [];
  }
  ionViewDidEnter() {
    this.loadmap();
    this.getComunidadesShape();
  }

  loadmap() {
    this.map = new L.Map('map').fitWorld();
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
  getEcuadorShape() {
    this.http.get('assets/shapeFiles/ecuador.json').subscribe((json: any) => {
      var ecuador = L.geoJSON(json, {
        onEachFeature: function (feature, layer) {
          layer.on('click', function (e) {
            //Do something when click on any province
          })
        },
        //change style of provinces
        style: function (layer) {
          return { fillOpacity: 0.3, color: '#055', weight: 1 }
        }
      }).addTo(this.map);
    });
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
        style: function (layer) {
          //return { fillOpacity: 0.8, color: '#555' }
        }
      });
      this.map.fitBounds(comunidad.getBounds());
      this.comunidades = tempObjects;
      this.lenguas = tempLeng;
      this.getLanguages(this.lenguas);
      //console.log(this.comunidades);
    })
  }


  heatMapLayer(lenguaLayer) {
    var heatLayers = {};

    for (let leng in lenguaLayer) {
      for (let c in this.comunidades) {
        heatLayers[lenguaLayer[leng]] = []
        if (lenguaLayer[leng].toString() === this.comunidades[c].properties.LENGUA_L1.toString()) {
          console.log("Existe");
          heatLayers[lenguaLayer[leng]].push(this.comunidades[c])
          var centro = this.getCentro(this.comunidades[c].geometry.coordinates[0][0]);
          var heatMapPoint = L.heatLayer([[centro[0], centro[1], 0.65]], {
            radius: 55, // default value
            blur: 0, // default value
            gradient: { 1: 'yellow' } // Values can be set for a scale of 0-1
          }).addTo(this.map)
        }
      }
    }
    console.log(heatLayers);
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

    function changeGeneration({ label, value, map }) {

      console.log(label+"-"+value+"-"+map);
    }
    this.map.addControl(controlLenguas);
    L.control.timelineSlider({
      timelineItems: ["Abuelos", "Padres", "Entrevistados", "Hijos"],
      changeMap: changeGeneration,
      extraChangeMapParams: { exclamation: "Hello World!" }
    }).addTo(this.map);
  }

 /* ctualizarCapa() {
    this.map.on('baselayerchange', function (e) {
      //Se obtiene zoom de la capa a enfocar y se centra con una animación
      var zoom = this.map.getBoundsZoom(this.lengs[e.name].getBounds());
      var posicion = this.lengs[e.name].getBounds()
      var lat = (posicion._northEast.lat + posicion._southWest.lat) / 2
      var lng = (posicion._northEast.lng + posicion._southWest.lng) / 2
      this.map.flyTo([lat, lng], zoom, {
        animate: true,
        duration: 0.6
      });
      //heatMap(e.name);
    });
  }*/




}