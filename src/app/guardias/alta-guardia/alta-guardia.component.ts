import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { GuardiasService } from '../guardias.service.js';

@Component({
  selector: 'app-alta-guardia',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './alta-guardia.component.html',
  styleUrl: './alta-guardia.component.css'
})
export class AltaGuardiaComponent {
  constructor (private service : GuardiasService){
    this.dni= new FormControl('',[Validators.required,Validators.maxLength(30)]);
    this.nombre= new FormControl('',[Validators.required,]);
    this.apellido= new FormControl('',[Validators.required,]);
    
  
    this.guardia = new FormGroup({

      nombre: this.nombre,
      dni: this.dni,
      apellido: this.apellido,
      
      })}
    
  guardia : FormGroup;
  nombre : FormControl;
  apellido : FormControl;
  dni: FormControl;
  bandera: undefined| string
 
  enviarGuarida(){
    this.bandera=undefined
    this.service.guardia=this.guardia.value
    console.log(this.service.guardia)
    this.service.postGuardia(this.service.guardia).subscribe({
      next:(data)=>{
        if(data.status === 201){
          console.log("el guardia se creo ", data)
          this.bandera='creado'
        }
        if(data.status == 202){
          this.bandera='existente'
          console.log("el guardia ya existe y se reanuda el contrato")
        }
      },
      error:(e)=>{
        if(e.status === 404){
          console.log("guardia y esta activo  ")
          this.bandera = 'activo'
        }
      }})
      this.guardia.reset()
  }


}
