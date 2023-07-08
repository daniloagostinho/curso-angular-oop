import { Component } from '@angular/core';
import { MinhaPrimeiraClasse } from './fundamentos/classes/minhaPrimeiraClasse';
import { MinhaSegundaClasse } from './fundamentos/classes/minhaSegundaClasse';
import { Gato } from './fundamentos/classes/gato';
import { Cachorro } from './fundamentos/classes/cachorro';
import { Funcionario } from './fundamentos/classes/funcionario';
import { Carro } from './fundamentos/classes/carro';
import { Aviao } from './fundamentos/classes/aviao';
import { Guitarra } from './fundamentos/classes/guitarra';
import { TocarMusica } from './fundamentos/classes/tocarMusica';
import { Piano } from './fundamentos/classes/piano';
import { ClienteNormal } from './modelos/clienteNormal';
import { QuartoSimples } from './modelos/quartoSimples';
import { Reserva } from './modelos/reserva';
import { ClienteVIP } from './modelos/clienteVIP';
import { QuartoLuxo } from './modelos/quartoLuxo';
import { Quarto } from './interfaces/quarto.interface';
import { HotelService } from './servicos/hotel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'fundamentos-oop';
  cliente = {nome: ''};
  tipoCliente = 'normal';
  quarto!: Quarto;
  tipoQuarto = '';

  quantidadeDias!: number;

  constructor(public hotelService: HotelService) {}

  criarCliente(): void {
    if(this.tipoCliente === 'normal') {
      this.cliente = new ClienteNormal(this.cliente.nome, 'Normal');
      this.tipoQuarto = 'simples';
    } else if(this.tipoCliente === 'vip') {
      this.cliente = new ClienteVIP(this.cliente.nome, 'VIP');
      this.tipoQuarto = 'deluxo'
    }

    this.hotelService.setCliente(this.cliente);
    this.escolherQuarto();
  }

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

    console.log(reserva.detalhesReserva);
    
    
  }

  escolherQuarto(): void {
    if(this.tipoQuarto === 'simples') {
      this.quarto = new QuartoSimples();
    } else if(this.tipoQuarto === 'deluxo') {
      this.quarto = new QuartoLuxo();
    }

    this.hotelService.setQuarto(this.quarto);
  }

  fazerReserva(): void {
    this.criarCliente();
    
    let cliente = this.hotelService.getCliente();
    let quarto = this.hotelService.getQuarto();
    let reserva = new Reserva(cliente, quarto, this.quantidadeDias);
    

    this.hotelService.addReserva(reserva);

    console.log(this.hotelService.getReservas());

  }
  
}

