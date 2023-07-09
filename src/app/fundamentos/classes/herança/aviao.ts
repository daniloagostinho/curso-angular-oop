import { Veiculo } from "./veiculos";

export class Aviao extends Veiculo {
    mover(): void {
        console.log(`O aviao ${this.marca} ${this.modelo} esta se movendo.`)
    }

    outroMetodo(): void {
        console.log('sou um aviao!')
    }
}