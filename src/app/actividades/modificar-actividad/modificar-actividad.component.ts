import { Component, EventEmitter, Input, OnInit, Output, ViewChild, viewChild } from '@angular/core';
import { FormularioActividadComponent } from '../formulario-actividad/formulario-actividad.component';
import { IActividad } from '../../shared/entity.interfaces.js';
import { ActividadService } from '../actividad.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modificar-actividad',
  standalone: true,
  imports: [FormularioActividadComponent],
  templateUrl: './modificar-actividad.component.html',
  styleUrl: './modificar-actividad.component.css'
})
export class ModificarActividadComponent implements OnInit{
  @Input() actividad!:IActividad
  @Output() update: EventEmitter<any> = new EventEmitter()
  @Output() delete: EventEmitter<any> = new EventEmitter()
  @ViewChild(FormularioActividadComponent) form_actividad_comp!:FormularioActividadComponent
 



  constructor(private _service_actividad:ActividadService,private toastr:ToastrService){}
ngOnInit(): void {
}
modificarActividad(actividad_modificada:IActividad){
  this._service_actividad.putActividad(this.actividad.cod_actividad as number,actividad_modificada).subscribe({
    next:(data)=>{
      console.log(data)
      this.toastr.success(data.message)
      this.update.emit({id:this.actividad.cod_actividad,dia:this.form_actividad_comp.form_actividad.value.dia_de_la_semana})
    },
    error:(e)=>{
      console.log(e)
      this.toastr.error(e.error.message)
    }
  })
}

eliminarActividad(id_actividad:number){
  console.log("eliminar actividad")
  this._service_actividad.deleteActividad(id_actividad).subscribe({
    next:(data)=>{
      console.log(data)
      this.toastr.success(data.message)
      this.delete.emit(this.actividad.cod_actividad)
    }, error:(e)=>{
      console.log(e)
      this.toastr.error(e.error.message)
    }
  })
}

}
