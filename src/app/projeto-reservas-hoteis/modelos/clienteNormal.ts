import { ClienteAbastract } from "./cliente";

export class ClienteNormal extends ClienteAbastract {
    constructor(nome: string, tipo: string) {
        super(nome, tipo)
    }
}