export class Funcionario {
    nome: string;
    idade: number;
    private salario: number;

    constructor(nome: string, idade: number, salario: number) {
        this.nome = nome;
        this.idade = idade;
        this.salario = salario;
    }

    get getSalario() {
        return this.salario;
    }

    set setSalario(salario: number) {
        this.salario = salario;
    }
}