import { NgFor, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IActividad, IRecluso } from '../../shared/entity.interfaces.js';
import { ReclusosService } from '../../reclusos/reclusos.service.js';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-inscripcion-actividad',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './inscripcion-actividad.component.html',
  styleUrl: './inscripcion-actividad.component.css'
})
export class InscripcionActividadComponent implements OnInit{
  @Input() actividad!:IActividad

  reclusos!:IRecluso[]

  constructor(private _service_recluso:ReclusosService, private toastr: ToastrService){}

ngOnInit(){
  this._service_recluso.getAllReclusos().subscribe({
    next: (data)=>{
      this.reclusos = data
    },
    error: (e)=>{
      console.log("error: ",e)
      this.toastr.error(e.error.message)
    }
  })

}

eliminarInscripcion(cod:number|undefined){
  console.log("eliminar inscripcion de reclusos")
  this.actividad.reclusos = this.actividad.reclusos.filter((x:IRecluso)=>x.cod_recluso===cod)
}

inscribirRecluso(){
  console.log("inscribir recluso")
}

}
