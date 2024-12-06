import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { GuardiasService } from '../guardias.service.js';

@Component({
  selector: 'app-buscar-guardia',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './buscar-guardia.component.html',
  styleUrl: './buscar-guardia.component.css'
})
export class BuscarGuardiaComponent {
constructor(public service : GuardiasService){
  this.dni= new FormControl('',[Validators.required,Validators.maxLength(30)]);
this.guardia = new FormGroup({
      dni: this.dni,
      })}
guardia  : FormGroup;
dni: FormControl;
bandera = false;
buscarGuardia(){
  this.bandera= false;
  this.service.getOneGuardias(this.dni.value).subscribe({
    next:(respuesta)=> {
      if(respuesta.status == 201){
        console.log("guardia encontrado",respuesta.status)
        this.service.guardia = respuesta
        this.bandera = false;
      }
    },
    error: (e)=>{console.log(e)
      if(e.status == 404){
        console.log("guardia no encontrado", e.status)
        this.bandera=true
      }
    }
  })
  console.log(this.service.guardia)
  console.log(this.dni.value)
  this.guardia.reset()
}


}
