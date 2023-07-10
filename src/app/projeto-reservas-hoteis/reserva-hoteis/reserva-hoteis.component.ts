import { Component } from '@angular/core';
import { Quarto } from '../interfaces/quarto.interface';
import { ClienteNormal } from '../modelos/clienteNormal';
import { ClienteVIP } from '../modelos/clienteVIP';
import { QuartoSimples } from '../modelos/quartoSimples';
import { QuartoLuxo } from '../modelos/quartoLuxo';
import { Reserva } from '../modelos/reserva';
import { HotelService } from '../servicos/hotel.service';
import { Cliente } from '../interfaces/cliente.interface';

@Component({
  selector: 'app-reserva-hoteis',
  templateUrl: './reserva-hoteis.component.html',
  styleUrls: ['./reserva-hoteis.component.css']
})
export class ReservaHoteisComponent {
  clienteInput = {nome: ''}
  cliente!: Cliente;
  tipoCliente = 'normal';
  quarto!: Quarto;
  tipoQuarto = '';

  quantidadeDias!: any;

  constructor(public hotelService: HotelService) {}

  criarCliente(): void {
    if(this.tipoCliente === 'normal') {
      this.cliente = new ClienteNormal(this.clienteInput.nome, 'Normal');
      this.tipoQuarto = 'simples';
    } else if(this.tipoCliente === 'vip') {
      this.cliente = new ClienteVIP(this.clienteInput.nome, 'VIP');
      this.tipoQuarto = 'deluxo'
    }

    this.hotelService.setCliente(this.cliente);
    this.escolherQuarto();
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

    console.log(reserva.detalhesReserva);
    this.clienteInput.nome = '';
    this.quantidadeDias = null;

  }
}
