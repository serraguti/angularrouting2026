import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tabla-multiplicar-component',
  standalone: false,
  styleUrl: './tabla-multiplicar-component.css',
  templateUrl: './tabla-multiplicar-component.html',
})
export class TablaMultiplicarComponent {
  @ViewChild("cajanumero") cajanumero!: ElementRef;
  resultados: number[];

  constructor() {
    this.resultados = []
  }

  generarTablaMultiplicar(): void {
    let numero = parseInt(this.cajanumero.nativeElement.value);
    for (let i = 1; i <= 10; i++){
      let operacion = numero * i;
      this.resultados.push(operacion);
    }
  }
}
