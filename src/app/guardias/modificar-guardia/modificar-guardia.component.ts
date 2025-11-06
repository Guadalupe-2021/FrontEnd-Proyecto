import { Component, Input, OnInit} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GuardiasService } from '../guardias.service';
import { IGuardia } from '../../shared/entity.interfaces.js';
import { ToastrService } from 'ngx-toastr';
import {  Router } from '@angular/router';
import { DatePipe, NgFor, NgIf } from '@angular/common';
import { FormularioGuardiaComponent } from '../formulario-guardia/formulario-guardia.component';

@Component({
  selector: 'app-modificar-guardia',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,NgFor,NgIf,DatePipe,FormularioGuardiaComponent],
  templateUrl: './modificar-guardia.component.html',
  styleUrl: './modificar-guardia.component.css',
  providers:[DatePipe]
})
export class ModificarGuardiaComponent {
  @Input() guardia!: IGuardia;

constructor (public _service_guard: GuardiasService,
  private toastr:ToastrService,
  public router:Router,
) {}


modificarGuardia(guard:IGuardia){
    this._service_guard.putGuardia(this.guardia.cod_guardia,guard).subscribe({
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


finalizarContrato(guard:IGuardia){
    this._service_guard.putGuardia(this.guardia.cod_guardia,guard).subscribe({
      next:(serverResponse)=>{
      this.toastr.success("Contrato Finalizado")
      console.log(serverResponse.data)
    },
    error: (e)=>{
      console.log(e)
      this.toastr.error(e.message)
    }
    })

}



}
