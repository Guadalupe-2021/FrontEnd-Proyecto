import { Component, OnInit } from '@angular/core';
import { ActividadService } from '../actividad.service.js';
import { NgFor, NgIf } from '@angular/common';
import { FormularioActividadComponent } from '../formulario-actividad/formulario-actividad.component.js';
import { IActividad } from '../../shared/entity.interfaces.js';

@Component({
  selector: 'app-mostrar-actividad',
  standalone: true,
  imports: [NgFor,FormularioActividadComponent, NgIf],
  templateUrl: './mostrar-actividad.component.html',
  styleUrl: './mostrar-actividad.component.css'
})
export class MostrarActividadComponent implements OnInit{

diasXActividades:{dia:string,actividades:IActividad[]}[] = [
  { dia: 'Lunes', actividades:[] },
  { dia: 'Martes', actividades:[] },
  { dia: 'Miercoles', actividades:[] },
  { dia: 'Jueves', actividades:[] },
  { dia: 'Viernes', actividades:[] },
  { dia: 'Sabado', actividades:[] },
  { dia: 'Domingo', actividades:[] },
]
  constructor (public _service_actividad : ActividadService){}

  ngOnInit(){
    this._service_actividad.getActividades().subscribe({
      next:(data)=>{
          console.log("Actividades Encontradas:" , data.data)
          data.data.forEach((actividad:IActividad)=>{
            this.diasXActividades.forEach((diaXact)=>{
              if(diaXact.dia.toLowerCase()===actividad.dia_de_la_semana){
                diaXact.actividades.push(actividad)
              }
            })
          })
      },
      error:(e)=>{
        if(e.status === 404){
          console.log("Actividades NO Encontradas:",e)
        }
      }
    })

  }
  
}
