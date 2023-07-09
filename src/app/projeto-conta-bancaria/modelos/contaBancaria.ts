export abstract class ContaBancaria {
    constructor(public titular: string, protected saldo: number = 0) {}

    depositar(valor: number): void {
        this.saldo += valor;
    }

    abstract sacar(valor: number): void;

    get getSaldo(): number {
        return this.saldo;
    }

    abstract getTipo(): string;
}