import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ParroquiaModel } from './../models/ParroquiaModel';
import { DataApiService } from './../services/data-api.service';



@Component({
  selector: 'app-cultura-descripcion',
  templateUrl: './cultura-descripcion.page.html',
  styleUrls: ['./cultura-descripcion.page.scss'],
})
export class CulturaDescripcionPage implements OnInit {
  idPublicacion: string
  public titulo;
  public provincia;
  public imagen;
  public descripcion;
  constructor(private activedRoute: ActivatedRoute, private route: Router, private ApiService: DataApiService) { }

  ngOnInit() {
    this.idPublicacion = this.activedRoute.snapshot.params.publicacion;
    this.ApiService.getOneCultura(this.idPublicacion).subscribe(Response => {
      this.titulo = Response.titulo;
      this.provincia = Response.provincia;
      this.imagen = Response.imagen;
      this.descripcion = Response.descripcion

    })
  }
  regresar() {
    this.route.navigate(['/culturas']);
  }

}
