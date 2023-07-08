import { ClienteAbastract } from "./cliente";

export class ClienteVIP extends ClienteAbastract {
    constructor(nome: string, tipo: string) {
        super(nome, tipo);
    }

    override mensagemParabens(): string {
        return 'Muito obrigado por ser nosso cliente VIP!';
    }
}
