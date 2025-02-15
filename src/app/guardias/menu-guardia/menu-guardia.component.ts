import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BuscarGuardiaComponent } from '../buscar-guardia/buscar-guardia.component.js';
import { AltaGuardiaComponent } from '../alta-guardia/alta-guardia.component.js';
import { MostrarGuardiaComponent } from '../mostrar-guardia/mostrar-guardia.component.js';

@Component({
  selector: 'app-menu-guardia',
  standalone: true,
  imports: [RouterLink,BuscarGuardiaComponent,AltaGuardiaComponent,MostrarGuardiaComponent],
  templateUrl: './menu-guardia.component.html',
  styleUrl: './menu-guardia.component.css'
})
export class MenuGuardiaComponent {

}
