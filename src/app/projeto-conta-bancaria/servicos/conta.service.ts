import { Injectable } from '@angular/core';
import { ContaBancaria } from '../modelos/contaBancaria';
import { ContaCorrente } from '../modelos/contaCorrente';
import { ContaSalario } from '../modelos/contaSalario';
import { ContaPoupanca } from '../modelos/contaPoupanca';

@Injectable({
 providedIn: 'root'   
})

export class ContaService {
    conta: ContaBancaria | null = null;

    criarContaCorrente(titular: string): ContaBancaria {
        this.conta = new ContaCorrente(titular);
        return this.conta;
    }

    criarContaSalario(titular: string): ContaBancaria {
        
        this.conta = new ContaSalario(titular);
        return this.conta;
    }

    criarContaPoupanca(titular: string): ContaBancaria {
        this.conta = new ContaPoupanca(titular);
        return this.conta;
    }

    getConta(): ContaBancaria | null {
        return this.conta;
    }

}