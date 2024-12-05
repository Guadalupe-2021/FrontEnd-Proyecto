import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BotonAtrasComponent } from '../../boton-atras/boton-atras.component.js';

@Component({
  selector: 'app-menu-guardia',
  standalone: true,
  imports: [RouterLink, BotonAtrasComponent],
  templateUrl: './menu-guardia.component.html',
  styleUrl: './menu-guardia.component.css'
})
export class MenuGuardiaComponent {

}
