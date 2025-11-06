import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GuardiasService } from '../guardias.service';
import { IGuardia } from '../../shared/entity.interfaces.js';
import { ToastrService} from 'ngx-toastr';
import { FormularioGuardiaComponent } from '../formulario-guardia/formulario-guardia.component';
import { DatePipe, NgIf } from '@angular/common';
@Component({
  selector: 'app-alta-guardia',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,FormularioGuardiaComponent,NgIf],
  templateUrl: './alta-guardia.component.html',
  styleUrl: './alta-guardia.component.css',
  providers:[DatePipe],
})
export class AltaGuardiaComponent {
  unGuardia!:IGuardia
  mostrar_guardia = false
  constructor (private toastr: ToastrService, private _service_guard : GuardiasService,){}
 

mostrarGuardia(){
  this.mostrar_guardia= !this.mostrar_guardia
}

altaGuardia(form_guardia_value: IGuardia){
  this._service_guard.postGuardia(form_guardia_value).subscribe({
      next:(data)=>{
        if(data.status === 201) this.toastr.success("Guardia Creado Con Exito")
        },
      error:(e)=>{
        if(e.status === 409) this.toastr.error("ERROR: El Guardia Ya Existe")
        if(e.status === 500) this.toastr.error("Error Inesperado")
      }})
  }


}


