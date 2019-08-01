import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  map: L.Map;
  lenguas: Array<string>
  comunidades: Array<any>
  constructor(private http: HttpClient) { }
  ionViewDidEnter() {
    this.loadmap();
    this.getEcuadorShape();
    this.getComunidadesShape();
  }

  loadmap() {
    this.map = new L.Map('map').fitWorld();
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      // tslint:disable-next-line
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18
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
      this.map.fitBounds(ecuador.getBounds());
    });
  }
  getComunidadesShape() {
    this.http.get('assets/shapeFiles/ddbb.json').subscribe((json: any) => {
      L.geoJson(json, {
        onEachFeature: function (feature) {
          //.push(feature);
          //console.log(this.comunidades)
          /*
        if (this.lenguas.indexOf(feature.properties.LENGUA_L1) === -1) {
            this.lenguas.push(feature.properties.LENGUA_L1)
        }*/
        },
        style: function (layer) {
          return { fillOpacity: 0.8, color: '#555' }
        }
      })
    })
  }

}