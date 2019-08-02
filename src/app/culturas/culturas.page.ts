import { Component, OnInit } from '@angular/core';
import { AplicationServiceService } from './../aplication-service.service';
import { ParroquiaModel } from './../models/ParroquiaModel';
import { FilterPipe } from './../pipes/filter.pipe';


@Component({
  selector: 'app-culturas',
  templateUrl: './culturas.page.html',
  styleUrls: ['./culturas.page.scss'],
})
export class CulturasPage implements OnInit {

  parroquia: ParroquiaModel;
  parroquias: Array<ParroquiaModel>;
  url:string = '/parroquia';
  textoBuscar = '';

  constructor(private service: AplicationServiceService) { }

  ngOnInit() {
    this.parroquia = new ParroquiaModel();
    this.parroquias = new Array<ParroquiaModel>();
    this.getParroquia();
  }

  getParroquia() {
    this.service.get(this.url).subscribe(
      response => {
        this.parroquias = response['parroquia'];
        console.log(this.parroquias);
      },
      error => {console.log(error)}
    );
  }

  buscarParroquia(event) {
    const texto = event.target.value;
    this.textoBuscar = texto;
    console.log(texto);
  }

}
