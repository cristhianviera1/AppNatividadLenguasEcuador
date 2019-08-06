import { LenguaNativaModel } from './LenguaNativaModel';
import { ProvinciaModel } from './ProvinciaModel';
export class ParroquiaModel {
    id: number;
    nombreParroquia: string;
    ubicacion: string;
    descripcion: string;
    imagen: string;
    provincia: ProvinciaModel;
    lenguaNativa: LenguaNativaModel;
    constructor( ){
        this.id=0;
        this.nombreParroquia = '';
        this.ubicacion = '';
        this.imagen = '';
        this.provincia = new ProvinciaModel();
        this.lenguaNativa = new LenguaNativaModel();
    }
}