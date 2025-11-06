import { NgFor, NgIf, TitleCasePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IActividad, IRecluso } from '../../shared/entity.interfaces.js';
import { ReclusosService } from '../../reclusos/reclusos.service';
import { ToastrService } from 'ngx-toastr';
import { BuscarReclusosComponent } from '../../reclusos/buscar-reclusos/buscar-reclusos.component';
import { ActividadService } from '../actividad.service';

@Component({
  selector: 'app-inscripcion-actividad',
  standalone: true,
  imports: [NgFor, NgIf, BuscarReclusosComponent, TitleCasePipe],
  templateUrl: './inscripcion-actividad.component.html',
  styleUrl: './inscripcion-actividad.component.css'
})
export class InscripcionActividadComponent implements OnInit{
  @Input() actividad!:IActividad

  reclusos!:IRecluso[]
  mostrar_recluso = false
  recluso_buscado !: IRecluso
  mostrar_buscador = false

  constructor(
    private _service_recluso:ReclusosService,
    private _service_actividad:ActividadService,
    private toastr: ToastrService){}

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
  this.actividad.reclusos?.forEach((rec,idx)=>{
    if(rec.cod_recluso===cod){
      //eliminar del back
      this._service_recluso.inscripcionActividad(rec.cod_recluso,
        {actividad_data:this.actividad,eliminar:true}).subscribe({
          next:(data)=>{
            this.toastr.info('Recluso Eliminado de Actividad')
            this.actividad.reclusos?.splice(idx,1) // eliminar en front
            console.log(data)
          },error:(e)=>{
            console.log(e)
            this.toastr.error(e.error.message)
          }
        })
    }
    })
}

inscribirRecluso(){
  if(this.actividad!=undefined){
  const recluso_inscripto = this.actividad.reclusos?.find((recluso)=>recluso.cod_recluso===this.recluso_buscado.cod_recluso)
  
  if(recluso_inscripto){
    this.toastr.error('Recluso ya inscripto')
  }else{
    // agregar en back
    this._service_recluso.inscripcionActividad(this.recluso_buscado.cod_recluso as number,
       {actividad_data:this.actividad, eliminar:false}).subscribe({
      next: (data)=>{
        this.toastr.success('Recluso Inscripto')
        this.actividad.reclusos?.push(this.recluso_buscado)  // agregar en front
        this.mostrar_recluso = false
      },error: (e)=>{
        this.toastr.error(e)
        console.log(e)
      }
    })
  }
}

}



mostrarRecluso( recluso:IRecluso){
  if(recluso!=undefined){
    this.mostrar_recluso = true
    this.recluso_buscado = recluso
  }else{
    this.toastr.error('Recluso No Encontrado')
  }
}

mostrarBuscador(){
  this.mostrar_buscador = !this.mostrar_buscador
}


}
