import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { GuardiasService } from '../guardias.service.js';
import { IGuardia } from '../../shared/entity.interfaces.js';
import { DatePipe, NgIf } from '@angular/common';
import { ModificarGuardiaComponent } from '../modificar-guardia/modificar-guardia.component.js';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-buscar-guardia',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,NgIf,DatePipe,ModificarGuardiaComponent],
  templateUrl: './buscar-guardia.component.html',
  styleUrl: './buscar-guardia.component.css'
})

export class BuscarGuardiaComponent implements OnInit {
  form_buscar_guardia:FormGroup
  unGuardia!:IGuardia
  guardia_encontrado = false
  identificador='dni'
  pattern!:RegExp
  title!:string
constructor(private _service_guard : GuardiasService,private formb:FormBuilder, private toastr: ToastrService){
  this.form_buscar_guardia = this.formb.group({
    id: ['',[Validators.required]]
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
    this.form_buscar_guardia.setControl('id',this.formb.control('',[Validators.required]));
      
    }else if(this.identificador==='cod'){
      this.form_buscar_guardia.setControl('id',this.formb.control('', [Validators.required]));
        this.pattern = /^\d{1,7}$/
        this.title = "Please enter between 1 and 7 digits"
      }
}

buscarGuardia(){
  if(!this.form_buscar_guardia.invalid){
  this._service_guard.getOne(this.form_buscar_guardia.value.id).subscribe({
    next:(data)=> {
      this.guardia_encontrado = true
      this.unGuardia = data
    },
    error: (e)=>{console.log(e)
      this.guardia_encontrado = false
      this.toastr.error("Guardia NO Encontrado")
      if(e.status == 404) console.log("guardia no encontrado", e.status)
    }
  })
 }else{
  this.toastr.error("Completar Con Datos Validos")
 }
}

}
