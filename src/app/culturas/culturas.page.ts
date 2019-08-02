import { Component, OnInit } from '@angular/core';
import { AplicationServiceService } from './../aplication-service.service';
import { ParroquiaModel } from './../models/ParroquiaModel';


@Component({
  selector: 'app-culturas',
  templateUrl: './culturas.page.html',
  styleUrls: ['./culturas.page.scss'],
})
export class CulturasPage implements OnInit {

  parroquia: ParroquiaModel;
  parroquias: Array<ParroquiaModel>;
  url:string = '/parroquia';

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

}
