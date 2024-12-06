import { Component, OnInit } from '@angular/core';
import { ActividadService } from '../actividad.service.js';
import { RouterLink } from '@angular/router';
import { BotonAtrasComponent } from '../../boton-atras/boton-atras.component.js';

@Component({
  selector: 'app-mostrar-actividad',
  standalone: true,
  imports: [RouterLink,BotonAtrasComponent],
  templateUrl: './mostrar-actividad.component.html',
  styleUrl: './mostrar-actividad.component.css'
})
export class MostrarActividadComponent implements OnInit{
  constructor (public service : ActividadService){}
  bandera:undefined|boolean
  actividades:{cantidad_minima:number, cod_actividad:number, cod_sector:number, descripcion:string,
dia_de_la_semana:number, edad_minima:number,  estado:number,  hora_fin:number, hora_inicio:number,
 locacion:string,nombre:string}[]|undefined
  estadoActividad: string|undefined
  ngOnInit(): void {
    this.service.getActividades().subscribe({
      next:(data)=>{
        if(data.status === 201){
          this.actividades = data.data
          console.log("Actividades Encontradas:" , this.actividades)
        }
      },
      error:(e)=>{
        if(e.status === 404){
          this.bandera = true
          console.log("Actividades NO Encontradas:",e)
        }
      }})
  }
  
}
