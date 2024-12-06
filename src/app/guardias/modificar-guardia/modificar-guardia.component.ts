import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { GuardiasService } from '../guardias.service.js';

@Component({
  selector: 'app-modificar-guardia',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './modificar-guardia.component.html',
  styleUrl: './modificar-guardia.component.css'
})
export class ModificarGuardiaComponent {
constructor (public service: GuardiasService ) {
  this.nombre = new FormControl('')
  this.apellido = new FormControl('')
  this.cod_guardia = new FormControl('',[Validators.required])

  this.guardia = new FormGroup({
    nombre : this.nombre,
    apellido: this.apellido,
    cod_guardia: this.cod_guardia
  })
}
encontrado = false;
guardia: FormGroup
nombre: FormControl
apellido: FormControl
cod_guardia: FormControl
gActual={nombre:'',apellido:'',cod_guardia:''}

enviarModificacion(){
this.gActual.apellido = this.apellido.value,
this.gActual.nombre = this.nombre.value 
this.gActual.cod_guardia = this.cod_guardia.value
this.service.postGuardia(this.gActual).subscribe({next:(respuesta)=>{console.log(respuesta)},
error: (e)=>{console.log(e)}})
this.guardia.reset() 
}

validarCodigo(){
this.service.getOneGuardias(this.cod_guardia.value).subscribe({next:(respuesta)=>{this.service.guardias=respuesta 
  this.encontrado = true
},error: (e)=>{console.log(e)}
})
console.log(this.service.guardias)
;
}

}
