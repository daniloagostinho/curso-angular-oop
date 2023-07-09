import { Component } from '@angular/core';
import { ContaBancaria } from '../modelos/contaBancaria';
import { ContaService } from '../servicos/conta.service';

@Component({
  selector: 'app-conta-bancaria',
  templateUrl: './conta-bancaria.component.html',
  styleUrls: ['./conta-bancaria.component.css']
})
export class ContaBancariaComponent {
  nome: string = '';
  tipoConta: string = '';
  valorTransacao: number | null = null;
  conta: ContaBancaria | null = null;

  constructor(private contaService: ContaService) { }

  criarConta(): void {
    if (this.nome && this.tipoConta) {
      switch (this.tipoConta) {
        case 'corrente':
          this.conta = this.contaService.criarContaCorrente(this.nome);
          console.log(this.conta);
          break;

        case 'salario':
          this.conta = this.contaService.criarContaSalario(this.nome);
          console.log(this.conta);
          break;

        case 'poupanca':
          this.conta = this.contaService.criarContaPoupanca(this.nome);
          console.log(this.conta);
          break;

          default:
            console.error('Tipo de conta inválido!')
      }
    }
  }

  depositar(): void {
    if (this.valorTransacao && this.valorTransacao > 0) {
      this.conta && this.conta.depositar(this.valorTransacao);
      this.valorTransacao = null;
    }
  }
  
  sacar(): void {
    if (this.valorTransacao && this.valorTransacao > 0) {
      this.conta && this.conta.sacar(this.valorTransacao);
      this.valorTransacao = null;
    }
  }

}
