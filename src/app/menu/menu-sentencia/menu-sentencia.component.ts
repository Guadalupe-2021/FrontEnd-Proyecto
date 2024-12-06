import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BotonAtrasComponent } from '../../boton-atras/boton-atras.component.js';

@Component({
  selector: 'app-menu-sentencia',
  standalone: true,
  imports: [RouterLink,BotonAtrasComponent],
  templateUrl: './menu-sentencia.component.html',
  styleUrl: './menu-sentencia.component.css'
})
export class MenuSentenciaComponent {
 
}
