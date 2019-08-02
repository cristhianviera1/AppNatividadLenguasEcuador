import { ParroquiaModel } from './ParroquiaModel';
import { PreguntaModel } from './PreguntaModel';
import { OpcionModel } from './OpcionModel';

export class PreguntaOpcionModel {
    id: number;
    cantidad: number;
    parroquia: ParroquiaModel;
    pregunta: PreguntaModel;
    opcion: OpcionModel;
    constructor() {
        this.id = 0;
        this.cantidad = 0;
        this.parroquia = new ParroquiaModel();
        this.pregunta = new PreguntaModel();
        this.opcion = new OpcionModel();
    }
}