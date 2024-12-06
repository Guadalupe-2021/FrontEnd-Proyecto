import { AfterViewInit, Component, OnChanges, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuTurnosComponent } from '../menu-turnos/menu-turnos.component.js';
import { MostrarCeldasComponent } from '../mostrar-celdas/mostrar-celdas.component.js';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-detalle-sector',
  standalone: true,
  imports: [RouterLink,MenuTurnosComponent,MostrarCeldasComponent,NgIf],
  templateUrl: './detalle-sector.component.html',
  styleUrl: './detalle-sector.component.css'
})
export class DetalleSectorComponent {

}
