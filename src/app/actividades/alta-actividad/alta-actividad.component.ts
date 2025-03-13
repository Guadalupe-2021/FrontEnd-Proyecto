import { Component, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActividadService } from '../actividad.service.js';
import { FormularioActividadComponent } from '../formulario-actividad/formulario-actividad.component.js';
import { IActividad } from '../../shared/entity.interfaces.js';
import { NgIf } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-alta-actividad',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,FormularioActividadComponent,NgIf],
  templateUrl: './alta-actividad.component.html',
  styleUrl: './alta-actividad.component.css'
})
export class AltaActividadComponent {

  mostrar_actividad = false
  @ViewChild(FormularioActividadComponent) form_actividad_comp!:FormularioActividadComponent

  constructor (private _service_actividad : ActividadService, private toastr:ToastrService){}

  crearActividad(nueva_actividad:IActividad){
    console.log(nueva_actividad)
    this._service_actividad.postActividad(nueva_actividad).subscribe({
      next:(data)=>{
        this.toastr.success(data.message)
        this.form_actividad_comp.form_actividad.reset()
      },
      error:(e)=>{
        if(e.status===409)this.toastr.error(e.error.message)
        if(e.status===500)this.toastr.error(e.message)
      }
    })
  }

  mostrarActividad(){
    this.mostrar_actividad = !this.mostrar_actividad
  }
}
