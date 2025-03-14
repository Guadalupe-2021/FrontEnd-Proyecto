import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AltaActividadComponent } from '../alta-actividad/alta-actividad.component.js';
import { MostrarActividadComponent } from '../mostrar-actividad/mostrar-actividad.component.js';

@Component({
  selector: 'app-menu-actividad',
  standalone: true,
  imports: [RouterLink, AltaActividadComponent,MostrarActividadComponent],
  templateUrl: './menu-actividad.component.html',
  styleUrl: './menu-actividad.component.css'
})
export class MenuActividadComponent {

}
