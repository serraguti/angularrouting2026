import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-select-numeros-dobles-component',
  standalone: false,
  styleUrl: './select-numeros-dobles-component.css',
  templateUrl: './select-numeros-dobles-component.html',
})
export class SelectNumerosDoblesComponent {
  @ViewChild("selectnumero") selectnumero!: ElementRef;
  doble: number;
  arrayNumeros: number[];

  constructor(){
    this.doble = 0;
    this.arrayNumeros = [];
  }

  generarNumero(): void {
    //generar numero random
    let random = Math.floor(Math.random() * 100) + 1;
    this.arrayNumeros.push(random);
  }

  mostrarDoble():void {
    let numero = parseInt(this.selectnumero.nativeElement.value);
    this.doble = numero;
  }
}
