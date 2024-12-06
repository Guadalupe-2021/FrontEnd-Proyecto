import { Component } from '@angular/core';
import { RouterOutlet ,RouterLink} from '@angular/router';
import { BotonAtrasComponent } from '../../boton-atras/boton-atras.component.js';


@Component({
  selector: 'app-menu-taller',
  standalone: true,
  imports: [RouterOutlet ,RouterLink,BotonAtrasComponent],
  templateUrl: './menu-taller.component.html',
  styleUrl: './menu-taller.component.css'
})
export class MenuTallerComponent {}
