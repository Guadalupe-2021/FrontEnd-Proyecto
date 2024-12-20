import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { GuardiasService } from '../guardias.service.js';
import { IGuardia } from '../../shared/entity.interfaces.js';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modificar-guardia',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './modificar-guardia.component.html',
  styleUrl: './modificar-guardia.component.css'
})
export class ModificarGuardiaComponent {

form_guardia:FormGroup
unGuardia:IGuardia
fecha_ini:any
today= new Date
fecha:Date|undefined
constructor (public _service_guard: GuardiasService, private formb:FormBuilder, private toastr:ToastrService ) {
this.unGuardia = this._service_guard.getGuardia()
this.fecha_ini = this.unGuardia.fecha_ini_contrato;

//this.fecha = new Date((this.unGuardia.fecha_ini_contrato))
console.log(this.today.toLocaleDateString("es-AR")) // Date--->'dd/mm/yyyy'
this.fecha = new Date(this.unGuardia.fecha_ini_contrato)  // new Date(unString) de string--->Date
console.log(this.fecha)
console.log(this.fecha.toLocaleDateString("es-AR"))  // unaDate.toLocaleString(formatoPais)--->dd/mm/yyyy(string)




this.form_guardia = this.formb.group({
  nombre:[this.unGuardia.nombre,Validators.required],
  apellido:[this.unGuardia.apellido,Validators.required],
  dni:[`${this.unGuardia.dni}`,[Validators.required,Validators.minLength(8)]],
  fecha:[this.unGuardia.fecha_ini_contrato,Validators.required],
  fecha_ini_contrato:[(new Date(this.unGuardia.fecha_ini_contrato).toLocaleDateString("es-AR")),
    Validators.required],
  fecha_fin_contrato:[this.unGuardia.fecha_fin_contrato,Validators.required]
})

}
dateChange(){
  this.fecha = new Date(this.form_guardia.value.fecha)
  this.form_guardia.setControl('fecha_ini_contrato', this.formb.control(this.fecha.toLocaleDateString("es-AR"), [Validators.required]));
}

enviarModificacion(){
this._service_guard.putGuardia(this.unGuardia.cod_guardia,this.form_guardia.value).subscribe({
next:(serverResponse)=>{
  this.toastr.success(serverResponse.message)
  console.log(serverResponse.data)
},
error: (e)=>{
  console.log(e)
  this.toastr.error(e.message)
}
})

}



}
