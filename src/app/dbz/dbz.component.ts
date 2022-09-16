import { Component, Input } from '@angular/core';
import { Personaje } from './interfaces/dbz.interface';
import { DbzService } from './services/dbz.service';

@Component({
  selector: 'app-dbz',
  templateUrl: './dbz.component.html',
  styleUrls: ['./dbz.component.css']
})
export class DbzComponent  {

   nuevo: Personaje={
    nombre: 'Maestro Roshi',
    poder: 1000
  }

  constructor(){}
}
 

