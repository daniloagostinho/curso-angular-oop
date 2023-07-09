import { Quarto } from "../interfaces/quarto.interface";

export abstract class QuartoAbstract implements Quarto {
    constructor(public tipo: string, public valor: number) {}
}