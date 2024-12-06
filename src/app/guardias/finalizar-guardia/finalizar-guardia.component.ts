import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { GuardiasService } from '../guardias.service.js';

@Component({
  selector: 'app-finalizar-guardia',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './finalizar-guardia.component.html',
  styleUrl: './finalizar-guardia.component.css'
})
export class FinalizarGuardiaComponent {
  constructor(public service : GuardiasService){
    this.cod_guardia= new FormControl('',[Validators.required,Validators.maxLength(30)]);
  this.guardia = new FormGroup({
        cod_guardia: this.cod_guardia,
        })}
  guardia  : FormGroup;
  cod_guardia: FormControl;
  fin:string | undefined
  bandera :undefined|boolean;
  validarGuarida(){
    this.finalizarContrato()  
  }
  finalizarContrato(){
    console.log(this.cod_guardia.value)
    this.service.putFinalizarGuardia(this.guardia.value).subscribe({
      next:(data)=>{
        if(data.status==201){
          console.log("contrato finalizado")
          this.fin="exito"
          
        }
      },
      error:(e)=>{
        if(e.status==404){
          this.fin="no encontrado"
          console.log("no se encontro el guardia")
        }
        if(e.status == 409){
          this.fin="finalizado"
          console.log("contrato ya finalizado")
        }
      }})
  }
}
