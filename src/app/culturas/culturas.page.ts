import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataApiService } from './../services/data-api.service';
import { NavController, ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page'
import { safeCall } from '@ionic/core/dist/types/utils/overlays';




@Component({
  selector: 'app-culturas',
  templateUrl: './culturas.page.html',
  styleUrls: ['./culturas.page.scss'],
})
export class CulturasPage implements OnInit {

  textoBuscar = '';
  public culturas = [];
  public cultura = '';
  public prev=[];

  constructor(private ApiService: DataApiService, private route: Router, private nav: NavController, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.ApiService.getAllCulturas().subscribe(culturas => {
      this.prev = culturas;
      this.culturas = culturas;
    })
  }

  async mostrarModal() {
    const modal = await this.modalCtrl.create({
      component: ModalPage
    })
    modal.present()
  }
  filterList(name:any) {    
    const searchItems = name.srcElement.value;
    if (!searchItems) {
      this.culturas = this.prev;
    }
    console.log(this.culturas);
    var elementos=[]
    this.culturas.filter(actual => {
      if (actual.titulo && searchItems) {
        if (actual.titulo.toLowerCase().indexOf(searchItems.toLowerCase()) > -1) {
          elementos.push(actual);
          return true;
        }
        return false;
      }
    });
    this.culturas=elementos
  }

  enviarParametros(idPublicacion) {
    this.route.navigate(['/cultura-descripcion', { publicacion: idPublicacion }])
  }
}
