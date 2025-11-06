import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BuscarReclusosComponent } from '../buscar-reclusos/buscar-reclusos.component';
import { MostrarReclusosComponent } from '../mostrar-reclusos/mostrar-reclusos.component';
import { IRecluso } from '../../shared/entity.interfaces.js';
import { NgIf } from '@angular/common';
import { ModificarReclusoComponent } from '../modificar-recluso/modificar-recluso.component';

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
