import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  heroes: string[] = [
    'spiderman', 'hulk', 'Thor', 'Iroman'
  ]
  heroeBorrado : string = '';
  constructor() { }

  ngOnInit(): void {
  }
borrarHeroe(){
  this.heroeBorrado = this.heroes.shift() || ''; //shift borra el primer elemento del arreglo
}
}
