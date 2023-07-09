import { Veiculo } from "./veiculos";

export class Carro extends Veiculo {
    mover(): void {
        console.log(`O carro ${this.marca} ${this.modelo} esta se movendo.`)
    }
}