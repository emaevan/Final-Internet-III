import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @Output('response') devolverRespuesta = new EventEmitter<Number>(); //Para enviar una variable fuera del objeto directo al script de content.ts

  constructor() { }

  ngOnInit(): void {
  }

  cargar(index){
    let str = 'Cargando página de bienvenida';
    switch(index){
      case 1:
        str = 'Cargando libreria de juegos';
        break;
      case 2:
        str = 'Cargando formulario de contacto'
        break;
    }
    console.log(str);

    this.devolverRespuesta.emit(index);
  }
}
