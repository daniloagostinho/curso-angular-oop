import { Component } from '@angular/core';
import { MinhaPrimeiraClasse } from './fundamentos/classes/outros exemplos/minhaPrimeiraClasse';
import { MinhaSegundaClasse } from './fundamentos/classes/outros exemplos/minhaSegundaClasse';
import { Gato } from './fundamentos/classes/abstração/gato';
import { Cachorro } from './fundamentos/classes/abstração/cachorro';
import { Funcionario } from './fundamentos/super/funcionario';
import { Carro } from './fundamentos/classes/herança/carro';
import { Aviao } from './fundamentos/classes/herança/aviao';
import { Guitarra } from './fundamentos/classes/polimorfismo/guitarra';
import { TocarMusica } from './fundamentos/classes/polimorfismo/tocarMusica';
import { Piano } from './fundamentos/classes/polimorfismo/piano';
import { ClienteNormal } from './projeto-reservas-hoteis/modelos/clienteNormal';
import { QuartoSimples } from './projeto-reservas-hoteis/modelos/quartoSimples';
import { Reserva } from './projeto-reservas-hoteis/modelos/reserva';
import { ClienteVIP } from './projeto-reservas-hoteis/modelos/clienteVIP';
import { QuartoLuxo } from './projeto-reservas-hoteis/modelos/quartoLuxo';
import { Quarto } from './projeto-reservas-hoteis/interfaces/quarto.interface';
import { HotelService } from './projeto-reservas-hoteis/servicos/hotel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'fundamentos-oop';
  reservaHoteis = false;
  contaBancaria = false;

  ngOnInit() {
  //  let meuPrimeiroObjeto = new MinhaPrimeiraClasse('Danilo', 30, 'Dev');
  //  let meuSegundoObjeto = new MinhaPrimeiraClasse('Emerson', 22, 'Garçom');
  //  let meuTerceiroObjeto = new MinhaSegundaClasse('Rafa', 30, 'Analista')

  //  meuPrimeiroObjeto.setNome('Juliano');
  //  console.log('terceiro objeto -->> ', meuTerceiroObjeto)
  //  console.log('terceiro objeto -->> ', meuTerceiroObjeto.showNome())
  //  console.log(meuPrimeiroObjeto.mostraNome())
  //  console.log(meuSegundoObjeto)
  //  console.log(meuTerceiroObjeto)

    // meuPrimeiroObjeto.setNome = '';
    // console.log(meuPrimeiroObjeto.mostraNome)

    // let gato = new Gato('Nino');
    // let cachorro = new Cachorro('Sprinte');

    // console.log(gato.barulho())
    // console.log(cachorro.barulho())

    // let funcionario = new Funcionario('Danilo', 30, 1000);
    // funcionario.setSalario = 20000;
    // console.log(funcionario.getSalario)
    

    // let carro = new Carro('FIAT', 'UNO');
    // let aviao = new Aviao('GOL', 'Air bus')

    // console.log(carro)
    // carro.mover();

    // console.log(aviao)
    // aviao.mover();

    // console.log(Object.getPrototypeOf(aviao));

    // let guitarra = new Guitarra();
    // let piano = new Piano();

    // let tocarMusica = new TocarMusica();

    // tocarMusica.tocar(piano);

    let cliente = new ClienteNormal('João', 'Normal');
    let quarto = new QuartoSimples();
    let quarto2 = new QuartoLuxo();
    let reserva = new Reserva(cliente, quarto2, 1);

    let cliente2 = new ClienteVIP('Rafa', 'VIP');
    let reserva2 = new Reserva(cliente2, quarto2, 2)

    // console.log(reserva.detalhesReserva);

    let funcionario = new Funcionario('Danilo', 'Dev');

    console.log(funcionario)
    funcionario.message()
    
  }

  reservaHoteisFunc(): void {
    this.reservaHoteis = !this.reservaHoteis;
    this.contaBancaria = false;
  }

  contaBancariaFunc(): void {
    this.contaBancaria = !this.contaBancaria;
    this.reservaHoteis = false;
  }

}

