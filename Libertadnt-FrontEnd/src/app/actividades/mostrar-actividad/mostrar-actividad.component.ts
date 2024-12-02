import { Component, OnInit } from '@angular/core';
import { ActividadService } from '../actividad.service.js';
import { idText } from 'typescript';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mostrar-actividad',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './mostrar-actividad.component.html',
  styleUrl: './mostrar-actividad.component.css'
})
export class MostrarActividadComponent implements OnInit{
  constructor (public service : ActividadService){}
  bandera:undefined|boolean
  ngOnInit(): void {
    this.service.getActividades().subscribe({
      next:(data)=>{
        if(data.status === undefined){
          this.service.actividades=data
          console.log("actividades encontradas" , data)
        }
      },
      error:(e)=>{
        if(e.status === 404){
          this.bandera = true
          console.log("actividades no encontradas ",e)
        }
      }})
  }
  
}
