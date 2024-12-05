import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BotonAtrasComponent } from '../../boton-atras/boton-atras.component.js';

@Component({
  selector: 'app-menu-ilegal',
  standalone: true,
  imports: [RouterLink,BotonAtrasComponent],
  templateUrl: './menu-ilegal.component.html',
  styleUrl: './menu-ilegal.component.css'
})
export class MenuIlegalComponent {

}
