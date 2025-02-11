import { Component } from '@angular/core';
import { ReclusosService } from '../reclusos.service.js';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DatePipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-buscar-reclusos',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,NgFor,DatePipe],
  templateUrl: './buscar-reclusos.component.html',
  styleUrl: './buscar-reclusos.component.css'
})
export class BuscarReclusosComponent {
form_recluso:FormGroup
identificador="dni"
recluso_encontrado=false
error_encontrado=false
message:string|undefined
constructor(public service : ReclusosService, private form_b:FormBuilder){
this.form_recluso = this.form_b.group({
  id:['',[Validators.required,Validators.minLength(8)]],
  })
}
  reclusos:{cod_recluso?:number,nombre:string,apellido:string, dni:number, fecha_nac:Date}[]=[]
  
definirIdentificador():void{
this.identificador = (document.getElementById("selectorID") as HTMLInputElement).value
  if(this.identificador==='dni'){
this.form_recluso.setControl('id',this.form_b.control('', [Validators.required,Validators.minLength(8)]));
  }else if(this.identificador==='cod'){
this.form_recluso.setControl('id',this.form_b.control('', [Validators.required,Validators.maxLength(7)]));
  }
}

  buscarRecluso(){
    this.service.getOneRecluso(this.form_recluso.value.id).subscribe({
      next:(recluso)=>{
      this.error_encontrado=false
      this.service.recluso=recluso
      if(!(this.reclusos.find((o)=>o.cod_recluso==recluso.cod_recluso)))this.reclusos.push(recluso) 
      if(this.reclusos.length >=1) this.recluso_encontrado = true
      console.log(recluso.actividades)
      console.log(recluso)
    }
    ,error: (e)=>{
      this.error_encontrado=true
      if(e.status === 500)this.message = "Recluso Inexistente"
      if(e.status === 404)this.message = "Recluso NO Encontrado"
    }
    });
  }
  

}
