import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  divIndex = 0; //Para elegir que elemento cargar ( Bienvenida, Libreria, Form )

  constructor() { }

  ngOnInit(): void {
  }

  cambiarIndex(val){
    if(val < 0) { val = 0 } //Que el valor no pueda ser menor a 0
    if(val > 1) { val = 1 } //Ni mayor a 1, asi cubrimos las 2 páginas

    this.divIndex = val;
  }

}
