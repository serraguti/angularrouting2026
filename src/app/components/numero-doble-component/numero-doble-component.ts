import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-numero-doble-component',
  standalone: false,
  styleUrl: './numero-doble-component.css',
  templateUrl: './numero-doble-component.html',
})
export class NumeroDobleComponent implements OnInit {
  doble: number = 0;
  mensaje!: string;
  //EN EL CONSTRUCTOR RECIBIMOS LA CLASE 
  //ActivatedRoute QUE CONTIENE LOS PARAMETROS
  constructor(
    private _active: ActivatedRoute,
    private _cdr: ChangeDetectorRef,
    private _router: Router
  ) {}

  navegarToCasa(): void {
    this._router.navigate(["/"]);
  }

  goToDoble(): void {
    this._router.navigate(["/doble", 99]);
  }

  ngOnInit(): void {
    //EN ESTE METODO ES DONDE RECUPERAMOS LOS PARAMETROS
    this._active.params.subscribe((parametros: Params) => {
      //como el parametro es opcional, debemos preguntar si lo hemos
      //recibido
      if (parametros["numero"]){
        let numero = parametros["numero"];
        this.doble = numero * 2;
      }else{
        this.mensaje = "No tenemos parámetro";
      }
      this._cdr.detectChanges();
    })
  }
}
