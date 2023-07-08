import { InstrumentoMusical } from "../interfaces/instrumentoMusical";

export class Piano implements InstrumentoMusical {
    tocar(): void {
        console.log('Tocando uma melodia no piano.')
    }
}