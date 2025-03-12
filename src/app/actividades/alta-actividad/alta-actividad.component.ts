import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActividadService } from '../actividad.service.js';
import { FormularioActividadComponent } from '../formulario-actividad/formulario-actividad.component.js';
import { IActividad } from '../../shared/entity.interfaces.js';

@Component({
  selector: 'app-alta-actividad',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,FormularioActividadComponent],
  templateUrl: './alta-actividad.component.html',
  styleUrl: './alta-actividad.component.css'
})
export class AltaActividadComponent {
  constructor (private _service_actividad : ActividadService){}

  crearActividad(nueva_actividad:IActividad){
    console.log(nueva_actividad)
    this._service_actividad.postActividad(nueva_actividad).subscribe({
      next:(data)=>{
        console.log("Data Recoveres succesfully")
        console.log(data)
      },
      error:(e)=>{
        console.log("There has been an error")
        console.log(e)
      }
    })
  }
}
