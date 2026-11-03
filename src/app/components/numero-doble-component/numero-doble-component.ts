import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-numero-doble-component',
  standalone: false,
  styleUrl: './numero-doble-component.css',
  templateUrl: './numero-doble-component.html',
})
export class NumeroDobleComponent implements OnInit {
  doble: number = 0;

  //EN EL CONSTRUCTOR RECIBIMOS LA CLASE 
  //ActivatedRoute QUE CONTIENE LOS PARAMETROS
  constructor(
    private _active: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //EN ESTE METODO ES DONDE RECUPERAMOS LOS PARAMETROS
    this._active.params.subscribe((parametros: Params) => {
      
    })
  }
}
