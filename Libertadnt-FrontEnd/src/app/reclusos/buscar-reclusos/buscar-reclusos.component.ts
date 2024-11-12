import { Component } from '@angular/core';
import { ReclusosService } from '../reclusos.service.js';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-buscar-reclusos',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './buscar-reclusos.component.html',
  styleUrl: './buscar-reclusos.component.css'
})
export class BuscarReclusosComponent {
  constructor(public service : ReclusosService){
    this.cod_recluso= new FormControl('',[Validators.required,Validators.maxLength(30)]);
    this.nombre= new FormControl('',[Validators.required,]);
    this.apellido= new FormControl('',[Validators.required,]);
    this.dni= new FormControl('',[Validators.required,]);
  
  
  this.recluso = new FormGroup({
        nombre: this.nombre,
        cod_recluso: this.cod_recluso,
        apellido: this.apellido,
        dni: this.dni})    
  }
  
  recluso  : FormGroup;
  nombre : FormControl;
  apellido : FormControl;
  cod_recluso: FormControl;
  dni: FormControl;
  bandera: boolean | undefined;
  ;
  validarRecluso(){
    this.service.getOneRecluso(this.dni.value).subscribe({
      next:(data)=>{
        console.log(data)
        if(data.status === 201){
          this.service.recluso = data
          this.bandera = true
          console.log("fue asignado")
          console.log(this.service.recluso)
        }
      }
    ,error: (e)=>{
      if(e.status == 404){
      console.log(e)
      this.bandera=false
      }
    }
    });
  ;
  this.recluso.reset();
  }
  

}
