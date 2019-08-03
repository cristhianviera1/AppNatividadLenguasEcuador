import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataApiService } from './../services/data-api.service';



@Component({
  selector: 'app-culturas',
  templateUrl: './culturas.page.html',
  styleUrls: ['./culturas.page.scss'],
})
export class CulturasPage implements OnInit {

  textoBuscar = '';
  public culturas = [];
  public cultura = '';

  constructor(private ApiService: DataApiService, private route: Router) { }

  ngOnInit() {
    this.ApiService.getAllCulturas().subscribe(culturas => {
      console.log('Culturas', culturas);
      this.culturas = culturas;
    })

  }



  /*
  buscarParroquia(event) {
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
