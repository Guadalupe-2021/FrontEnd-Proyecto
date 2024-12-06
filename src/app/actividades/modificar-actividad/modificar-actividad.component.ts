import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActividadService } from '../actividad.service.js';

@Component({
  selector: 'app-modificar-actividad',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './modificar-actividad.component.html',
  styleUrl: './modificar-actividad.component.css'
})
export class ModificarActividadComponent {
  constructor (private service : ActividadService){
    this.cod_actividad= new FormControl('',[Validators.required,Validators.maxLength(30)]);
    this.descripcion= new FormControl('',[Validators.required,]);
    this.locacion= new FormControl('',[Validators.required,]);
    this.hora= new FormControl('',[Validators.required,]);
    this.diaDeLaSemana = new FormControl('',[Validators.required])
    this.cantMax= new FormControl('',[Validators.required,]);
    this.edadMin= new FormControl('',[Validators.required,]);
  
  
  this.actividad = new FormGroup({
        descripcion: this.descripcion,
        cod_actividad: this.cod_actividad,
        locacion: this.locacion,
        hora: this.hora,
        diaDeLaSemana:this.diaDeLaSemana,
        cantMax:this.cantMax,
        edadMin:this.edadMin
      })      
}
  actividad  : FormGroup;
  descripcion : FormControl;
  locacion : FormControl;
  cod_actividad: FormControl;
  diaDeLaSemana: FormControl;
  hora: FormControl;
  cantMax: FormControl;
  edadMin: FormControl;
  bandActividad:boolean | undefined
  validarActividad(){
    this.service.getOneActividad(this.cod_actividad.value).subscribe({
      next:(data)=>{
        if(data.status === undefined ){
          this.service.actividad=data
          console.log("actividad existente ",data);
          this.bandActividad=true;
        }
      },
      error:(e)=>{
        if(e.status){
          console.log("actividad no encontrada ",e)
          this.bandActividad=false
        }
      }})
  }
  cambiarActiviada(){
   if(this.descripcion.value!==''){this.service.actividad.descripcion=this.descripcion.value}
   if(this.locacion.value!==''){this.service.actividad.locacion=this.locacion.value}
   if(this.diaDeLaSemana.value!==''){this.service.actividad.diaDeLaSemana=this.diaDeLaSemana.value}
   if(this.hora.value!==''){this.service.actividad.hora=this.hora.value}
   if(this.cantMax.value!==''){this.service.actividad.cantMax=this.cantMax.value}
   if(this.edadMin.value!==''){this.service.actividad.edadMin=this.edadMin.value}
   this.service.postActividad(this.service.actividad).subscribe({
    next:(data)=>{console.log("activad posteada ", data)},
    error:(e)=>{console.log("actividad no posteada ", e)}})
    this.bandActividad = undefined
  }
}
