import { NgFor, NgIf, TitleCasePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IActividad, IRecluso } from '../../shared/entity.interfaces.js';
import { ReclusosService } from '../../reclusos/reclusos.service.js';
import { ToastrService } from 'ngx-toastr';
import { BuscarReclusosComponent } from '../../reclusos/buscar-reclusos/buscar-reclusos.component.js';
import { ActividadService } from '../actividad.service.js';

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
  this.actividad.reclusos = this.actividad.reclusos.filter((x:IRecluso)=>x.cod_recluso===cod)
}

inscribirRecluso(){
  if(this.actividad!=undefined){
  console.log("actividad not undefined good")
  const recluso_inscripto = this.actividad.reclusos.find((recluso)=>recluso.cod_recluso===this.recluso_buscado.cod_recluso)
  if(recluso_inscripto){
    this.toastr.error('Recluso ya inscripto')
  }else{
  console.log("agrega relcuso")

    this.actividad.reclusos.push(this.recluso_buscado)
    this._service_actividad.putActividad(this.actividad.cod_actividad as number, this.actividad).subscribe({
      next: (data)=>{
        this.toastr.success('Recluso Inscripto')
      },error: (e)=>{
        this.toastr.error(e.error.message)
      }
    })
  }
}
console.log(this.actividad)
}

mostrarRecluso( recluso:IRecluso){
  if(recluso!=undefined){
    this.mostrar_recluso = true
    this.recluso_buscado = recluso
  }else{
    this.toastr.error('Recluso No Encontrado')
  }
}


}
