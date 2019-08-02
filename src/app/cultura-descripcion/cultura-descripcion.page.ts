import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ParroquiaModel } from './../models/ParroquiaModel';


@Component({
  selector: 'app-cultura-descripcion',
  templateUrl: './cultura-descripcion.page.html',
  styleUrls: ['./cultura-descripcion.page.scss'],
})
export class CulturaDescripcionPage implements OnInit {

  parroquia: ParroquiaModel = new ParroquiaModel();
  parroquiaEnviada: ParroquiaModel;

  constructor(private activedRoute: ActivatedRoute, private route: Router) { }

  ngOnInit() {
    this.parroquiaEnviada = JSON.parse(this.activedRoute.snapshot.params.parroquia);
    console.log(this.parroquiaEnviada);
    // this.parroquia = new ParroquiaModel(JSON.parse(this.activedRoute.snapshot.params.parroquia));
  }

  regresar() {
    this.route.navigate(['/culturas']);
  }

}
