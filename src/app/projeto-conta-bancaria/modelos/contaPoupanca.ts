import { ContaSalario } from "./contaSalario";

export class ContaPoupanca extends ContaSalario {
    constructor(titular: string) {
        super(titular);
    }

    override getTipo(): string {
        return 'Conta Poupança';
    }
    
}