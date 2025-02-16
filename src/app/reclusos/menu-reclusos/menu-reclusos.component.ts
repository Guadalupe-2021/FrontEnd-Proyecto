import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BuscarReclusosComponent } from '../buscar-reclusos/buscar-reclusos.component.js';

@Component({
  selector: 'app-menu-reclusos',
  standalone: true,
  imports: [RouterLink,BuscarReclusosComponent],
  templateUrl: './menu-reclusos.component.html',
  styleUrl: './menu-reclusos.component.css'
})
export class MenuReclusosComponent {

}
