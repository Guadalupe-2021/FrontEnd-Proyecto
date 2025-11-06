import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ReclusosService } from '../reclusos.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DatePipe, NgIf } from '@angular/common';
import { IRecluso } from '../../shared/entity.interfaces.js';
import { ToastrService } from 'ngx-toastr';
import { ModificarReclusoComponent } from '../modificar-recluso/modificar-recluso.component';

@Component({
  selector: 'app-buscar-reclusos',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,DatePipe,ModificarReclusoComponent,NgIf],
  templateUrl: './buscar-reclusos.component.html',
  styleUrl: './buscar-reclusos.component.css'
})
export class BuscarReclusosComponent implements OnInit {
  @Output() sendRecluso:EventEmitter<IRecluso> = new EventEmitter<IRecluso>()

form_buscar_recluso:FormGroup
unRecluso!:IRecluso
recluso_encontrado = false
identificador='dni'
pattern!:RegExp
title!:string

constructor(public _service_recluso : ReclusosService, private formb:FormBuilder, private toastr:ToastrService){
this.form_buscar_recluso = this.formb.group({
  id:['',[Validators.required,Validators.minLength(8)]],
  })
}


ngOnInit(){
  this.definirIdentificador()
}

  
definirIdentificador():void{
  this.identificador = (document.getElementById("selectorID") as HTMLInputElement).value
  if(this.identificador==='dni'){
    this.pattern = /^\d{8,}$/
    this.title = "Please enter at least 8 digits"
    this.form_buscar_recluso.setControl('id',this.formb.control('',[Validators.required]));
      
    }else if(this.identificador==='cod'){
      this.form_buscar_recluso.setControl('id',this.formb.control('', [Validators.required]));
        this.pattern = /^\d{1,7}$/
        this.title = "Please enter between 1 and 7 digits"
      }
}

  buscarRecluso(){
  this.recluso_encontrado=false
  if(!this.form_buscar_recluso.invalid){
  this._service_recluso.getOneRecluso(this.form_buscar_recluso.value.id).subscribe({
    next:(data)=> {
      this.recluso_encontrado = true
      this.unRecluso = data
      this.enviarRecluso(data)
    },
    error: (e)=>{console.log(e)
      this.recluso_encontrado = false
      this.toastr.error("Recluso NO Encontrado")
      if(e.status == 404) console.log("recluso no encontrado", e.status)
    }
  })
 }else{
  this.toastr.error("Completar Con Datos Validos")
 }
  }
  
enviarRecluso(recluso_encontrado:IRecluso){
    this.sendRecluso.emit(recluso_encontrado)
}

}
