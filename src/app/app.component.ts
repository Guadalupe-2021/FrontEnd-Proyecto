import { Component } from '@angular/core';
import { RouterOutlet} from '@angular/router';
import { BotonAtrasComponent } from './boton-atras/boton-atras.component.js';
import { NavBarComponent } from './nav-bar/nav-bar.component.js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BotonAtrasComponent,NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title="front-libertant"
}
