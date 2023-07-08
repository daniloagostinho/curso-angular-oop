import { Component } from '@angular/core';
import { BoloInterface } from '../interfaces/bolo.interface';
import { Bolo } from '../classes/bolo';

@Component({
  selector: 'app-meu-primeiro-component',
  templateUrl: './meu-primeiro-component.component.html',
  styleUrls: ['./meu-primeiro-component.component.css']
})
export class MeuPrimeiroComponentComponent {
  meuAtributo!: string;
  bolo!: BoloInterface;
  meuMetodo(): void {

  }

  ngOnInit() {
    console.log('componente meu-primeiro-componente');

    this.bolo = new Bolo('Laranja', 200);

    console.log(this.bolo)
  }
  
}
