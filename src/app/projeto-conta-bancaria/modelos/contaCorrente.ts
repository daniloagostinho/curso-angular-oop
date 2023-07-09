import { ContaBancaria } from "./contaBancaria";

export class ContaCorrente extends ContaBancaria {
    constructor(titular: string) {
        super(titular)
    }

    sacar(valor: number): void {
        if(this.saldo >= valor) {
            this.saldo -= valor;
        } else {
            console.error('Saldo insuficiente!')
        }
    }

    getTipo(): string {
        return 'Conta Corrente';
    }
}
