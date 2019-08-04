import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataApiService } from './../services/data-api.service';
import { NavController, ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page'




@Component({
  selector: 'app-culturas',
  templateUrl: './culturas.page.html',
  styleUrls: ['./culturas.page.scss'],
})
export class CulturasPage implements OnInit {

  textoBuscar = '';
  public culturas = [];
  public cultura = '';

  constructor(private ApiService: DataApiService, private route: Router, private nav: NavController, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.ApiService.getAllCulturas().subscribe(culturas => {
      console.log('Culturas', culturas);
      this.culturas = culturas;
    })

  }

  async mostrarModal() {
    const modal = await this.modalCtrl.create({
      component: ModalPage
    })
    modal.present()
  }
  /*
  buscarParroquia(event) {s
    const texto = event.target.value;
    this.textoBuscar = texto;
    console.log(texto);
  }
  */
  /*enviarParametros(parroquia: ParroquiaModel) {
    this.route.navigate(['/cultura-descripcion', {parroquia: JSON.stringify(parroquia)}])
  }
  */

}
