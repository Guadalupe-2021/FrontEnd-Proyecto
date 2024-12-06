import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActividadService } from '../../actividades/actividad.service.js';

@Component({
  selector: 'app-alta-ilegal',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './alta-ilegal.component.html',
  styleUrl: './alta-ilegal.component.css'
})
export class AltaIlegalComponent {
  constructor(private service : ActividadService){
    this.decripcion= new FormControl('',[Validators.required,]);
    this.locacion= new FormControl('',[Validators.required,]);
    this.diaDeLaSemana = new FormControl('',[Validators.required])
    this.cantidad_maxima= new FormControl('',[Validators.required,]);
    this.nombre= new FormControl('',[Validators.required,]);
    this.horaInicio= new FormControl('',[Validators.required,]);
    this.horaFin= new FormControl('',[Validators.required,]);
    this.estado= new FormControl(1);
    
    
  
  
  this.ilegal = new FormGroup({
        nombre: this.nombre,
        descripcion: this.decripcion, 
        locacion: this.locacion, 
        diaDeLaSemana: this.diaDeLaSemana, 
        horaInicio: this.horaInicio, 
        horaFin: this.horaFin,
        estado: this.estado,
        cantidad_maxima: this.cantidad_maxima
      })}
ilegal  : FormGroup;
nombre:FormControl
decripcion : FormControl;
locacion : FormControl;
//cod_actividad: FormControl;
diaDeLaSemana: FormControl;

cantidad_maxima: FormControl;

horaInicio:FormControl;
horaFin:FormControl;
estado:FormControl;

bandera:string |undefined;
validarActividad(){
  this.service.postIlegal(this.ilegal.value).subscribe({
    next:(data)=>{
      console.log(data.status)
    if(data == 201){
      console.log("la actividad fue enviada")}
      console.log("paso por el post", data.status)
      this.bandera='correcto'
    
    if(data.status == 409){
      console.log("actividad ya existente ")
      this.bandera='existente'
    }},
    error:(e)=>{
      console.log(e.status)
      if(e.status == 404){
        console.log("error al postear")
        this.bandera='error'
      }
      if(e.status == 409){
        console.log("actividad ya existente ")
        this.bandera='existente'
      }
    }})
}


}
