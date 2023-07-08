import { InstrumentoMusical } from "../interfaces/instrumentoMusical";

export class TocarMusica {
    tocar(instrumento: InstrumentoMusical) {
        instrumento.tocar();
    }
}