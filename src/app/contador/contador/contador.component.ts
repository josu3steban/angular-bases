import {Component} from '@angular/core'


@Component({
    selector: 'app-contador',
    template: `
        
        <h1>{{title}}</h1>
        <button (click)="operacion('sumar', base);" >+{{ base }}</button>
        <span>{{numero}}</span>
        <button (click)="operacion('restar', base)">-{{ base }}</button>

    `
})

export class ContadorComponent {

    title: string = 'Contador App';
    numero: number = 10;
    base: number = 5;
    operacion( op: string, valor: number ) {
        if( op==='sumar' ) {
        this.numero+=valor;
        }else if( op==='restar' ) {
        this.numero-=valor;
        }
    }
}