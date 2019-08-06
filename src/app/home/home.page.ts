import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataApiService } from './../services/data-api.service';
import *  as L from 'leaflet';
import 'leaflet.heat/src/HeatLayer.js';
import 'leaflet.timeline'
import 'timeLineSlider/src/leaflet-timeline-slider.js'
import 'simpleheat/simpleheat.js'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public map: L.Map;
  private culturas = [];
  comunidades: Array<any>;
  lenguasJson: any;
  OpenStreetMaps: L.tileLayer;
  numerosPreguntas: Array<string>
  constructor(private http: HttpClient,
    private ApiService: DataApiService) {
    this.OpenStreetMaps = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
      maxZoom: 18,
      layers: [this.OpenStreetMaps]
    })
    this.numerosPreguntas = ['52', '53', '54', '55'];
  }

  ionViewDidEnter() {
    this.ApiService.getAllCulturas().subscribe(culturas => {
      this.culturas = culturas;
    });
    this.loadmap();
    this.getComunidadesShape();
    this.capaPopup();
  }

  /**Dibuja el mapa con capa de OpenStreetMap */
  loadmap() {
    this.map = new L.Map('map');
    this.OpenStreetMaps.addTo(this.map);
  }
  /**Se carga toda la información sobre las encuestas */
  getComunidadesShape() {
    this.http.get('assets/shapeFiles/ddbb.json').subscribe((json: any) => {
      //variable local para almacenar los objetos y lenguas que se detectan en el doc
      const tempObjects = [];
      const tempLeng = [];
      /**
       */
      var comunidad = L.geoJson(json, {
        onEachFeature: function (feature) {
          tempObjects.push(feature);
          if (tempLeng.indexOf(feature.properties.LENGUA_L1) === -1) {
            tempLeng.push(feature.properties.LENGUA_L1)
            tempLeng.sort();
          }
        }
      });
      this.comunidades = tempObjects;
      /**
       * Objeto en el cual guardaremos los geoJson para generar el control de capas
       */
      this.lenguasJson = {
      }
      /**Bucle para recorrer los objetos y dirigir a los de misma lengua a un objeto */
      for (let lenguaje in tempLeng) {
        this.lenguasJson[tempLeng[lenguaje]] = [];
        for (let parroquia in tempObjects) {
          if (tempObjects[parroquia].properties.LENGUA_L1 == tempLeng[lenguaje]) {
            this.lenguasJson[tempLeng[lenguaje]].push(tempObjects[parroquia]);
          }
        }

        this.lenguasJson[tempLeng[lenguaje]] = L.geoJson(this.lenguasJson[tempLeng[lenguaje]], {
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
              fillOpacity: 0,
              weight: 1,
            }
          }
        });
      }
      /**
       * Se genera control de lenguas y se lo agrega al mapa
       */
      L.control.layers(this.lenguasJson, null, {
        collapsed: true,
      }).addTo(this.map);
      this.map.fitBounds(comunidad.getBounds());
      this.controlCambioLengua();
    })
  }

  controlCambioLengua() {
    var map = this.map
    var osp = this.OpenStreetMaps;
    var ec = this.lenguasJson;
    var comunidades = this.comunidades;
    var numPregunta = this.numerosPreguntas;
    //objeto donde guardaremos todas las capas por pregunta seleccionada
    var heatMapLayers;

    this.map.on('baselayerchange', function (e) {
      map.eachLayer(function (l) {
        l.remove();
      })
      osp.addTo(map);
      //Enfoca la comunidad que ha seleccionado
      var posicion = ec[e.name].getBounds()
      var zoom = map.getBoundsZoom(ec[e.name].getBounds());
      var lat = (posicion._northEast.lat + posicion._southWest.lat) / 2
      var lng = (posicion._northEast.lng + posicion._southWest.lng) / 2
      map.flyTo([lat, lng], zoom, {
        animate: true,
        duration: 0.8
      });
      mapaCalor([e.name]);
      heatMapLayers['55'].remove()
      heatMapLayers['54'].remove()
      heatMapLayers['53'].remove()
    })
    /**
     * Función para obtener el centro de un pollígono
     * @param arr Array que contiene lat y lng 
     */
    function getCentro(arr) {
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
    function mapaCalor(layerName) {
      /**Se genera bucle para recorrer la encuesta y dibujar mapas de calor */
      heatMapLayers = {}
      //Recorre 55,54,53,52
      for (let numP in numPregunta) {
        var LatLngIntensity = []

        heatMapLayers[numPregunta[numP]] = L.heatLayer(LatLngIntensity, {
          gradient: {
            0.1: 'green',
            0.2: 'yellow',
            0.3: 'red'
          }, radius: 120
        }).addTo(map)

        //Recorre cada Parroquia
        for (let parr in comunidades) {
          if (comunidades[parr].properties.LENGUA_L1 == layerName) {
            /**Manejo solo las parroquias que tienen el mismo idioma */
            var centro = getCentro(comunidades[parr].geometry.coordinates[0][0]);
            //Se declara una variable temporal para guardar el número de personas que han respondido la encuesta por parroquia
            var numPersonas = parseInt(comunidades[parr].properties.TOTAL_ENC);
            var lenUno: number;
            var result = ((lenUno * 1) / numPersonas);
            //Recorre cada propiedad de la parroquia
            for (let forms in comunidades[parr].properties) {
              if (forms.slice(-2) == numPregunta[numP]) {
                if (forms.slice(0, -3) == "L1") {
                  lenUno = + parseFloat(comunidades[parr].properties[forms]);
                }
                if (forms.slice(0, -3) == "BILI") {
                  lenUno = + parseFloat(comunidades[parr].properties[forms]);
                }
              }
            }
            LatLngIntensity.push([centro[0], centro[1], result])
          }
        }
      }
    }
    L.control.timelineSlider({
      timelineItems: ["Abuelos", "Padres", "Encuestado", "Hijos"],
      changeMap: function (e) {
        for (let numP in numPregunta) {
          if (map.hasLayer(heatMapLayers[numPregunta[numP]])) {
            heatMapLayers[numPregunta[numP]].remove();
            if (e.label == "Abuelos") {
              heatMapLayers["52"].addTo(map);
            } else if (e.label == "Padres") {
              heatMapLayers["53"].addTo(map);
            } else if (e.label == "Encuestado") {
              heatMapLayers["54"].addTo(map);
            } else if (e.label == "Hijos") {
              heatMapLayers["55"].addTo(map);
            }
          }
        }
      }
    }).addTo(map)
  }
  capaPopup() {
    var map = this.map
    this.http.get('assets/shapeFiles/ecuador.json').subscribe((json: any) => {
      var ecuador = L.geoJson(json, {
        onEachFeature: function (feature, layer) {
          layer.bindPopup(feature.properties.dpa_despro);
          layer.on('mouseover', function (e) {
            this.openPopup();
          });
          layer.on('mouseout', function (e) {
            this.closePopup();
          });
        },
        style: function (layer) {
          return {
            fillOpacity: 0.3,
            color: '#055',
            weight: 1
          }
        }
      })
      ecuador.addTo(this.map);
    });
  }
}