import { Cliente } from "../interfaces/cliente.interface";
import { Quarto } from "../interfaces/quarto.interface";

export class Reserva {
    constructor(public cliente: Cliente, public quarto: Quarto, public quantidadeDias: number) {

    }

    public valorTotal() : number {
        return this.quarto.valor * this.quantidadeDias;
    }

    get detalhesReserva(): string {
        return `Reserva feita por ${this.cliente.nome} para um quarto ${this.quarto.tipo} por ${this.quantidadeDias} dias.${this.cliente.mensagemParabens()} o valor total ficou: ${this.valorTotal()}`;
    }
}