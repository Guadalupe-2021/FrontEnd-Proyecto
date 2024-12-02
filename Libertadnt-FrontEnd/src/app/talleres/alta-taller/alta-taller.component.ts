import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TallerService } from '../taller.service.js';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-alta-taller',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,RouterLink],
  templateUrl: './alta-taller.component.html',
  styleUrl: './alta-taller.component.css'
})
export class AltaTallerComponent {
  constructor (private service : TallerService){
    this.estado= new FormControl(1,[Validators.required,Validators.maxLength(30)]);
    this.descripcion= new FormControl('',[Validators.required,]);
    this.nombre= new FormControl('',[Validators.required,]);
    this.locacion= new FormControl('',[Validators.required,]);
    this.dia_de_la_semana = new FormControl('',[Validators.required])
    this.hora_inicio= new FormControl('',[Validators.required,]);
    this.hora_fin= new FormControl('',[Validators.required,]);
  
  this.taller = new FormGroup({
        nombre:this.nombre,
        descripcion: this.descripcion,
        estado: this.estado,
        locacion: this.locacion,
        dia_de_la_semana:this.dia_de_la_semana,
        hora_inicio:this.hora_inicio,
        hora_fin:this.hora_fin
        
      })      
}
  taller  : FormGroup;
  nombre:FormControl;
  descripcion : FormControl;
  locacion : FormControl;
  estado: FormControl;
  dia_de_la_semana: FormControl;
  hora_inicio: FormControl;
  hora_fin: FormControl;
  bandTaller:string | undefined
 
  enviarTaller(){
    console.log(this.taller.value)
    this.service.postTaller(this.taller.value).subscribe({
      next:(data)=>{
        if(data.status == 201){
          console.log('status: ',data.status)
          console.log("el taller fue posteado",data)
          this.bandTaller= 'exito'
        }},
      error:(e)=>{
        console.log('status: ',e.status)
        if(e.status== 409){
          console.log("coincide el dia y la hora",e)
          this.bandTaller='interferencia'
        }
        if(e.status== 400){
          console.log("falta atributos")
        }
      }})
    this.taller.reset()
  }

}
