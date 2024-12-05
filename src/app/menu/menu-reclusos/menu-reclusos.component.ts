import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BotonAtrasComponent } from '../../boton-atras/boton-atras.component.js';

@Component({
  selector: 'app-menu-reclusos',
  standalone: true,
  imports: [RouterLink,BotonAtrasComponent],
  templateUrl: './menu-reclusos.component.html',
  styleUrl: './menu-reclusos.component.css'
})
export class MenuReclusosComponent {

}
