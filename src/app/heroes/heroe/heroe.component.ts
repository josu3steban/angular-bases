import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent {
    
    nombre: string = 'Josue';
    edad: number = 25;

    get nombreCapitalizado() {
        return this.nombre.toUpperCase();
    }
    
    obtenerNombre(): string {
        return this.nombre;
    }

    cambiarNombre(): void {
        if(this.nombre === 'Spiderman') {
            this.nombre = 'Josue';
        } else {
            this.nombre = 'Spiderman';
        }
    }

    cambiarEdad(): void {
        if(this.edad === 25) {
            this.edad = 26;
        } else {
            this.edad = 25;
        }
    }
}
