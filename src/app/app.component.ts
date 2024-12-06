import { Component } from '@angular/core';
import { RouterOutlet} from '@angular/router';
import { BotonAtrasComponent } from './boton-atras/boton-atras.component.js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BotonAtrasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
