import { Component, OnInit } from '@angular/core';
import { ActividadService } from '../actividad.service';
import { NgFor, NgIf } from '@angular/common';
import { FormularioActividadComponent } from '../formulario-actividad/formulario-actividad.component';
import { IActividad } from '../../shared/entity.interfaces.js';
import { ToastrService } from 'ngx-toastr';
import { ModificarActividadComponent } from '../modificar-actividad/modificar-actividad.component';

@Component({
  selector: 'app-mostrar-actividad',
  standalone: true,
  imports: [NgFor,FormularioActividadComponent, NgIf,ModificarActividadComponent],
  templateUrl: './mostrar-actividad.component.html',
  styleUrl: './mostrar-actividad.component.css'
})
export class MostrarActividadComponent implements OnInit{

actividad_eliminada!:IActividad
diasXActividades:{dia:string,actividades:IActividad[]}[] = [
  { dia: 'Lunes', actividades:[] },
  { dia: 'Martes', actividades:[] },
  { dia: 'Miercoles', actividades:[] },
  { dia: 'Jueves', actividades:[] },
  { dia: 'Viernes', actividades:[] },
  { dia: 'Sabado', actividades:[] },
  { dia: 'Domingo', actividades:[] },
]
  constructor (public _service_actividad : ActividadService, private toastr:ToastrService){}

  ngOnInit(){
    this._service_actividad.getActividades().subscribe({
      next:(data)=>{
          data.forEach((actividad:IActividad)=>{
            this.addActividad(actividad)
          })
      },
      error:(e)=>{
        this.toastr.error(e.message)
        if(e.status === 404){
          console.log("Actividades NO Encontradas:",e)
        }
      }
    })

  }

addActividad(actividad:IActividad){
  this.diasXActividades.forEach((diaXact)=>{
    if(diaXact.dia.toLowerCase()===actividad.dia_de_la_semana){
       diaXact.actividades.push(actividad)
     }
   })
  }

actualizarArrayActividades(idxdia:{id:number,dia:string}){
  this.deleteActividad(idxdia.id,idxdia.dia)
  this.addActividad(this.actividad_eliminada)
}

deleteActividad(id:number,dia?:string){
  this.diasXActividades.forEach((diaXact)=>{
  diaXact.actividades.forEach((actividad,index)=>{
      if(actividad.cod_actividad===id){
        if(dia!=undefined)actividad.dia_de_la_semana = dia
       this.actividad_eliminada = actividad
       diaXact.actividades.splice(index,1)
      }
    })
  })

}
  
}
