import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import *  as L from 'leaflet';
import 'leaflet.heat/src/HeatLayer.js';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  map: L.Map;
  comunidades: Array<any>
  constructor(private http: HttpClient) {
    this.comunidades = [];
  }
  ionViewDidEnter() {
    this.loadmap();
    this.getEcuadorShape();
    this.getComunidadesShape();

  }

  loadmap() {
    this.map = new L.Map('map');
    var OpenStreetMap = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
      maxZoom: 18,
      layers: [OpenStreetMap]
    }).addTo(this.map);


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
          return { fillOpacity: 0.8, color: '#555' }
        }
      }).addTo(this.map);
      this.map.fitBounds(comunidad.getBounds());
      this.comunidades = tempObjects;
      this.getLanguages(tempLeng);
    })
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
      //baseLayers[overlay[i]].setStyle({'className':'parroquias'});
    }
    //console.log(lenguas);
    var controlLenguas = L.control.layers(lenguas, null, {
      collapsed: false,
    })
    this.map.addControl(controlLenguas);
  }

  actualizarCapa() {
    this.map.on('baselayerchange', function (e) {
      //Se obtiene zoom de la capa a enfocar y se centra con una animación
      var zoom = this.map.getBoundsZoom(this.comunidades[e.name].getBounds());
      var posicion = baseLayers[e.name].getBounds()
      var lat = (posicion._northEast.lat + posicion._southWest.lat) / 2
      var lng = (posicion._northEast.lng + posicion._southWest.lng) / 2
      map.flyTo([lat, lng], zoom, {
        animate: true,
        duration: 0.6
      });
      //map.fitBounds(baseLayers[e.name].getBounds());
      for (a in pastelesPrueba) {
        if (map.hasLayer(layerGroups[a])) {
          map.removeLayer(layerGroups[a]);
        }
      }
      if (pastelControlInstanciado) {
        for (layer in lengs.Usuarios) {
          if (map.hasLayer(lengs.Usuarios[layer])) {
            map.removeLayer(lengs.Usuarios[layer]);
          }
        }
      }
      $("#leyenda").removeClass('hide');
      $("#LN1").text(e.name);
      lenguaControl.collapse();
      preguntar(e.name);
      $(".leaflet-control-layers").css({ 'border-bottom': 'black 1px solid' });
      map.addLayer(layerGroups[54]);
      generaciones = true
    });
  }

}