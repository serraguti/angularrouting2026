import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-numeros-pares-component',
  standalone: false,
  styleUrl: './numeros-pares-component.css',
  templateUrl: './numeros-pares-component.html',
})
export class NumerosParesComponent {
  @ViewChild("cajainicio") cajainicio!: ElementRef;
  @ViewChild("cajafin") cajafin!: ElementRef;
  arrayNumeros!: number[];

  mostrarPares(): void {
    //debemos recuperar el numero de inicio de la caja
    //recuperamos el numero final de la caja
    let inicio = parseInt(this.cajainicio.nativeElement.value);
    let fin = parseInt(this.cajafin.nativeElement.value);
    //necesito un bucle for desde el inicio hasta el fin
    for (let i = inicio; i <= fin; i++){
      //preguntamos si el numero que estamos recorriendo
      //es par
      if (i % 2 == 0){
        //añadimos el numero al array
        this.arrayNumeros.push(i);
      }
    }
  }
}
