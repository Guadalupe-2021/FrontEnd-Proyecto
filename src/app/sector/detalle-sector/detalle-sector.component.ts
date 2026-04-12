import {  Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MostrarCeldasComponent } from '../mostrar-celdas/mostrar-celdas.component';
import { NgIf } from '@angular/common';
import { BotonAtrasComponent } from '../../boton-atras/boton-atras.component';

@Component({
  selector: 'app-detalle-sector',
  standalone: true,
  imports: [RouterLink,MostrarCeldasComponent,NgIf,BotonAtrasComponent],
  templateUrl: './detalle-sector.component.html',
  styleUrl: './detalle-sector.component.css'
})
export class DetalleSectorComponent {

}
