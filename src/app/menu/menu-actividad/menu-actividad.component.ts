import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BotonAtrasComponent } from '../../boton-atras/boton-atras.component.js';

@Component({
  selector: 'app-menu-actividad',
  standalone: true,
  imports: [RouterLink, BotonAtrasComponent],
  templateUrl: './menu-actividad.component.html',
  styleUrl: './menu-actividad.component.css'
})
export class MenuActividadComponent {

}
