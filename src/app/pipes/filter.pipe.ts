import { Pipe, PipeTransform } from '@angular/core';
import { ParroquiaModel } from './../models/ParroquiaModel';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(parroquias: ParroquiaModel[], texto: string): ParroquiaModel[] {
    if(texto.length === 0){
      return parroquias;
    }

    texto = texto.toLowerCase();

    return parroquias.filter( parroquia => {
      return parroquia.nombreParroquia.toLowerCase().includes(texto);
    })
  }

}
