import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { GuardiasService } from '../guardias.service.js';
import { IGuardia } from '../../shared/entity.interfaces.js';
import { ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-alta-guardia',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './alta-guardia.component.html',
  styleUrl: './alta-guardia.component.css',
  providers:[],
})
export class AltaGuardiaComponent {
  message = ["GUARDIA GUARDADO","GUARDIA EXISTENTE CONTRATADO","GUARDIA YA EXISTENTE Y OPERATIVO"]
  unGuardia!:IGuardia
  form_guardia:FormGroup
  constructor (private toastr: ToastrService, private _service_guard : GuardiasService, private formb:FormBuilder){
this.form_guardia = this.formb.group({
  nombre:['',Validators.required],
  apellido:['',Validators.required],
  dni:[null,[Validators.required,Validators.minLength(8)]],
  fecha_ini_contrato:[null,Validators.required],
})}
 
altaGuardia(){
  this.unGuardia = this.form_guardia.value
  this._service_guard.postGuardia(this.unGuardia).subscribe({
      next:(data)=>{
        if(data.status === 201) this.toastr.success("Guardia Creado Con Exito")
        },
      error:(e)=>{
        if(e.status === 409) this.toastr.error("ERROR: El Guardia Ya Existe")
        if(e.status === 500) this.toastr.error("Error Inesperado")
      }})

      //this.form_guardia.reset()
  }

}


