import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MeuPrimeiroComponentComponent } from './fundamentos/classes/outros exemplos/meu-primeiro-component/meu-primeiro-component.component';
import { FormsModule } from '@angular/forms';
import { ContaBancariaComponent } from './projeto-conta-bancaria/conta-bancaria/conta-bancaria.component';
import { ReservaHoteisComponent } from './projeto-reservas-hoteis/reserva-hoteis/reserva-hoteis.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponentComponent,
    ContaBancariaComponent,
    ReservaHoteisComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
