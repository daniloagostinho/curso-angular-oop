export abstract class Veiculo {
    constructor(public marca: string, public modelo: string) {}

    abstract mover(): void;
}