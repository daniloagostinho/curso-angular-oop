import { Cliente } from "../interfaces/cliente.interface";

export abstract class ClienteAbastract implements Cliente {
    constructor(public nome: string, public tipo: string) {}

    mensagemParabens(): string {
        return '';
    }
    
}