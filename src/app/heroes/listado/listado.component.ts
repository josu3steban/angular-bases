import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Spiderman',  'Holk', 'Venom', 'Thor'];
  
  borrado:string = '';
  
  borrarHeroe(): void {

    // this.heroes = this.heroes.filter( (hero) => hero !== 'Spiderman');

    this.borrado = this.heroes.shift() || '';
    
  }
  
}
