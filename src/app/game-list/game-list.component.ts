import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {
  @Input('Lista') lista;

  listaSeleccionada = [];

  lista1 = [
    {
      nombre:"Age of Empires II",
      imagen:"https://i.imgur.com/TSBJlNa.jpg"
    },
    {
      nombre:"Assetto Corsa Competizione",
      imagen:"https://i.imgur.com/weuu6Qk.jpg"
    },
    {
      nombre:"Amid Evil",
      imagen:"https://i.imgur.com/LGTU0zj.jpg"
    },
    {
      nombre:"A Plague Tale: Innocence",
      imagen:"https://i.imgur.com/4Sm1EsH.jpg"
    },
    {
      nombre:"Atelier Dusk DX Trilogy",
      imagen:"https://i.imgur.com/696juNy.jpg"
    },
    {
      nombre:"AO Tennis 2",
      imagen:"https://i.imgur.com/ZqgLagH.jpg"
    },
    {
      nombre:"Avorion",
      imagen:"https://i.imgur.com/yZGyE0h.jpg"
    },
    {
      nombre:"Assassin's Creed Odyssey Gold",
      imagen:"https://i.imgur.com/O5p3A3F.jpg"
    },
    {
      nombre:"Assassin's Creed: Rogue",
      imagen:"https://i.imgur.com/UgMOl0S.jpg"
    },
    {
      nombre:"Assassin's Creed IV: Black Flag Jackdaw",
      imagen:"https://i.imgur.com/Ai6grJw.jpg"
    },
    {
      nombre:"Assassin's Creed III",
      imagen:"https://i.imgur.com/P6AFwh7.jpg"
    },
    {
      nombre:"Assassin's Creed Liberation HD",
      imagen:"https://i.imgur.com/UUW6L4b.jpg"
    }
  ]
  lista2 = [
    {
      nombre:"Biped",
      imagen:"https://i.imgur.com/UKEFIj8.jpg"
    },
    {
      nombre:"Borderlands 3",
      imagen:"https://i.imgur.com/6d4iQf1.jpg"
    },
    {
      nombre:"Bloodlust 2 Nemesis",
      imagen:"https://i.imgur.com/xd1nx1I.jpg"
    },
    {
      nombre:"Bright Memory: Infinite",
      imagen:"https://i.imgur.com/Xe06xv5.jpg"
    },
    {
      nombre:"Besiege",
      imagen:"https://i.imgur.com/rzkTvoa.jpg"
    },
    {
      nombre:"Black Mesa",
      imagen:"https://i.imgur.com/ckiz2he.jpg"
    },
    {
      nombre:"Books of Demons",
      imagen:"https://i.imgur.com/JEjdgt5.jpg"
    },
    {
      nombre:"Battlefleet Gothic: Armada 2",
      imagen:"https://i.imgur.com/NsJ6qRK.jpg"
    },
    {
      nombre:"Battlefield V Deluxe Edition",
      imagen:"https://i.imgur.com/fsPud8G.png"
    },
    {
      nombre:"Bibi and Tina Adventures with Horse",
      imagen:"https://i.imgur.com/GTrZnae.jpg"
    },
    {
      nombre:"Bendy and the Ink Machine",
      imagen:"https://i.imgur.com/NcLuHTl.jpg"
    },
    {
      nombre:"BattleTech",
      imagen:"https://i.imgur.com/r08RCFu.jpg"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  public elegirLista(index = this.lista){
    switch(index){
      case 0:
        this.listaSeleccionada = this.lista1;
        break;
      case 1:
        this.listaSeleccionada = this.lista2;
        break;
      default:
        console.log("No existe una lista con ese indice");
        break;
    }
    console.log(this.listaSeleccionada);
  }
}
