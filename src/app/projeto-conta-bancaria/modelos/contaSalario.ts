import { ContaCorrente } from "./contaCorrente";

export class ContaSalario extends ContaCorrente {
    constructor(titular: string) {
        super(titular)
    }

    override getTipo(): string {
        return 'Conta Salário';
    }
}