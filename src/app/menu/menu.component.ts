import { Component, OnInit } from '@angular/core';
import { RouterOutlet ,RouterLink} from '@angular/router';
import { BotonAtrasComponent } from '../boton-atras/boton-atras.component.js';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterOutlet ,RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {

  constructor(){}
ngOnInit():void{}

}
