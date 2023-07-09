import { MinhaPrimeiraClasse } from "./minhaPrimeiraClasse";

export class MinhaSegundaClasse extends MinhaPrimeiraClasse {
    showNome(): string {
        return this.nome;
    }
}