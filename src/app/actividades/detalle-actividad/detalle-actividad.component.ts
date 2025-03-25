import { Component } from '@angular/core';
import { InscripcionActividadComponent } from '../inscripcion-actividad/inscripcion-actividad.component.js';
import { IActividad } from '../../shared/entity.interfaces.js';
import { ActividadService } from '../actividad.service.js';

@Component({
  selector: 'app-detalle-actividad',
  standalone: true,
  imports: [InscripcionActividadComponent],
  templateUrl: './detalle-actividad.component.html',
  styleUrl: './detalle-actividad.component.css'
})
export class DetalleActividadComponent {
  actividad!:IActividad
  
  constructor(private _service_actividad:ActividadService){
    this.actividad = this._service_actividad.getActividad()
  }




}
