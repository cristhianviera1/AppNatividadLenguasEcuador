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
  //json : any;
  constructor(private http: HttpClient) { }
  ionViewDidEnter() {
    this.loadmap();
    this.getEcuadorShape();
  }

  loadmap() {
    this.map = new L.Map('map').fitWorld();
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      // tslint:disable-next-line
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18
    }).addTo(this.map);    
  }
  getEcuadorShape(){
    this.http.get('assets/shapeFiles/ecuador.json').subscribe((json: any) => {
      var ecuador = L.geoJSON(json,{
        onEachFeature: function(feature, layer){
          layer.on('click',function(e){
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

}