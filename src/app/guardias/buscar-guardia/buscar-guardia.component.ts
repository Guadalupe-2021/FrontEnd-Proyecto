import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { GuardiasService } from '../guardias.service.js';
import { IGuardia } from '../../shared/entity.interfaces.js';
import { DatePipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-buscar-guardia',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,NgIf,DatePipe],
  templateUrl: './buscar-guardia.component.html',
  styleUrl: './buscar-guardia.component.css'
})

export class BuscarGuardiaComponent {
  form_buscar_guardia:FormGroup
  unGuardia!:IGuardia
  guardia_encontrado:boolean|undefined
  message: string|undefined
  identificador='dni'
constructor(private _service_guard : GuardiasService,private formb:FormBuilder){
  this.form_buscar_guardia = this.formb.group({
    id: ['',[Validators.required,Validators.minLength(8)]]
})
}

definirIdentificador():void{
this.identificador = (document.getElementById("selectorID") as HTMLInputElement).value
  if(this.identificador==='dni'){
this.form_buscar_guardia.setControl('id',this.formb.control('', [Validators.required,Validators.minLength(8)]));
  }else if(this.identificador==='cod'){
this.form_buscar_guardia.setControl('id',this.formb.control('', [Validators.required,Validators.maxLength(7)]));
  }
}

buscarGuardia(){
  this._service_guard.getOne(this.form_buscar_guardia.value.id).subscribe({
    next:(data)=> {
      this.guardia_encontrado = true
      this.unGuardia = data
    },
    error: (e)=>{console.log(e)
      this.guardia_encontrado = false
      this.message = "Guardia NO Encontrado"
      if(e.status == 404) console.log("guardia no encontrado", e.status)
    }
  })
}


}
