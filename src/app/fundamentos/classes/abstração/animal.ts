import { AnimalInterface } from "../../interfaces/animal.interface";

export class Animal implements AnimalInterface {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    barulho(): string {
        return '';
    }
}