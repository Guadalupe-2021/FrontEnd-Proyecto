import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BuscarReclusosComponent } from '../buscar-reclusos/buscar-reclusos.component.js';
import { MostrarReclusosComponent } from '../mostrar-reclusos/mostrar-reclusos.component.js';
import { IRecluso } from '../../shared/entity.interfaces.js';
import { NgIf } from '@angular/common';
import { ModificarReclusoComponent } from '../modificar-recluso/modificar-recluso.component.js';

@Component({
  selector: 'app-menu-reclusos',
  standalone: true,
  imports: [RouterLink,BuscarReclusosComponent,MostrarReclusosComponent,NgIf,ModificarReclusoComponent],
  templateUrl: './menu-reclusos.component.html',
  styleUrl: './menu-reclusos.component.css'
})
export class MenuReclusosComponent {
  recluso!:IRecluso
mostrarReclusoEncontrado(recluso:IRecluso){
  this.recluso = recluso
}
}
