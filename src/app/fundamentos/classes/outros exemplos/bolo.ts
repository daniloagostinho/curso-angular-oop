import { BoloInterface } from "../../interfaces/bolo.interface";

export class Bolo {
    constructor(public sabor: string, public peso: number) {}

    comerBolo(): string {
        return 'Estou comen do bolo!'
    }
}