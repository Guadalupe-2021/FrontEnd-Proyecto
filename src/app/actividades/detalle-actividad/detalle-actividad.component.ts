import { Component } from '@angular/core';
import { InscripcionActividadComponent } from '../inscripcion-actividad/inscripcion-actividad.component.js';
import { IActividad } from '../../shared/entity.interfaces.js';
import { ActividadService } from '../actividad.service.js';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-actividad',
  standalone: true,
  imports: [InscripcionActividadComponent],
  templateUrl: './detalle-actividad.component.html',
  styleUrl: './detalle-actividad.component.css'
})
export class DetalleActividadComponent {
  actividad!:IActividad
  
  constructor(private _service_actividad:ActividadService,private route:ActivatedRoute){
    this.actividad = this._service_actividad.getActividad() //otra forma seria usando params de la url para mandar get actividad al server
  console.log(this.actividad)
  }




}
