import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ReclusosService } from '../../reclusos/reclusos.service.js';
import { ActividadService } from '../actividad.service.js';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-alta-actividad',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,RouterLink],
  templateUrl: './alta-actividad.component.html',
  styleUrl: './alta-actividad.component.css'
})
export class AltaActividadComponent {
  constructor (private service : ActividadService){
    this.cod_actividad= new FormControl('',[Validators.required,Validators.maxLength(30)]);
    this.decripcion= new FormControl('',[Validators.required,]);
    this.locacion= new FormControl('',[Validators.required,]);
    this.hora= new FormControl('',[Validators.required,]);
    this.diaDeLaSemana = new FormControl('',[Validators.required])
    this.cantMax= new FormControl('',[Validators.required,]);
    this.edadMin= new FormControl('',[Validators.required,]);
  
  
  this.actividad = new FormGroup({
        decripcion: this.decripcion,
        cod_actividad: this.cod_actividad,
        locacion: this.locacion,
        hora: this.hora,
        diaDeLaSemana:this.diaDeLaSemana,
        cantMax:this.cantMax,
        edadMin:this.edadMin
      })      
}
  actividad  : FormGroup;
  decripcion : FormControl;
  locacion : FormControl;
  cod_actividad: FormControl;
  diaDeLaSemana: FormControl;
  hora: FormControl;
  cantMax: FormControl;
  edadMin: FormControl;
  bandActividad:boolean | undefined
  validarActividad(){
    this.service.getOneActividad(this.decripcion.value).subscribe({
      next:(data)=>{
        if(data.status == undefined){
          console.log("la actividad fue validada", data.status)
          this.service.actividad=data 
          this.bandActividad=false
          }
        },
      error:(e)=>{
         console.log("actividad no validada")
         if(e.status === 404){
          this.bandActividad = true
          console.log(this.actividad.value)
          this.service.postActividad(this.service.actividad).subscribe({
            next:(data)=>{
              console.log("estatus:",data.status)
              console.log("actvidad posteada")
            },
            error:(e)=>{
              console.log(e.status)
              console.log("la actividad NO pudo ser posteada")
            }})
          this.actividad.reset() 
         }
        }})
  }
}
