import { Component, ElementRef, input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators,FormBuilder } from '@angular/forms';
import { ReclusosService } from '../reclusos.service.js';
import { SentenciasService } from '../../sentencia/sentencias.service.js';
import { CommonModule, NgFor } from '@angular/common';
import { FormularioReclusoComponent } from '../formulario-recluso/formulario-recluso.component.js';
import { FormularioCondenaComponent } from '../../sentencia/formulario-condena/formulario-condena.component.js';
import { ICondena, IRecluso } from '../../shared/entity.interfaces.js';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-alta-reclusos',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,NgFor,FormularioReclusoComponent,FormularioCondenaComponent,
    CommonModule
  ],
  templateUrl: './alta-reclusos.component.html',
  styleUrl: './alta-reclusos.component.css'
})

export class AltaReclusosComponent implements OnInit{

  form_recluso:FormGroup
  constructor (private _service_recluso : ReclusosService,public _service_sent: SentenciasService,
    private form: FormBuilder, private toastr:ToastrService){


  this.form_recluso = this.form.group({
      fecha_nac:['',[Validators.required]],
      nombre:['',Validators.required],
      apellido:['',Validators.required],
      dni:['',[Validators.required,Validators.minLength(8)]]
      //cod_sentencia:['',]
  })
}
recluso!:IRecluso
recluso_creado=false
cant_condenas = 0
numbers :any
condenas:any[] = []
btn_alta = false
nuevo_recluso!:IRecluso


ngOnInit(): void {
  this.numbers=Array.from({length:this.cant_condenas},(_,i)=>i)  //

    }

recibirRecluso(nuevo_recluso:IRecluso){ 
  console.log("Nuevo Recluso: ",nuevo_recluso)
  this.nuevo_recluso = nuevo_recluso
  this.btn_alta = true
}

nuevaCondena(){
  this.cant_condenas = this.cant_condenas+1;
  this.numbers=Array.from({length:this.cant_condenas},(_,i)=>i)
}

addCondena(nueva_condena:ICondena){
  this.condenas.push(nueva_condena)
}

altaRecluso(){
  console.log("hacer alta recluso")
  if(this.condenas.length===0){
    this.toastr.error("Error: Para dar de alta el Recluso necesita almenos una condena")
  }else{
  this._service_recluso.postReclusoYCondenas(this.nuevo_recluso,this.condenas).subscribe({
    next: (data)=>{
        console.log("Recluso Creado con Exito",data)
        this.toastr.success("Recluso Ha Sido Dado de Alta")
        this.recluso_creado=true
    }
    ,error: (e)=>{
      if(e.status == 409 ){
        this.toastr.error("Conflict: Recluso ya Existe")
      }else{
        this.toastr.error(e.message)}
        console.log(e)   
    }
  })
  }

}



}

