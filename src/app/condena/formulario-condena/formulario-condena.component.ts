import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ICondena } from '../../shared/entity.interfaces.js';

@Component({
  selector: 'app-formulario-condena',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule,ReactiveFormsModule],
  templateUrl: './formulario-condena.component.html',
  styleUrl: './formulario-condena.component.css'
})
export class FormularioCondenaComponent implements OnInit{
 @Input() condena!: ICondena;
 @Output()  sendFormCondenaValue: EventEmitter<ICondena>=new EventEmitter<ICondena>()


form_condena!:FormGroup
years:number[]
months:number[]
days:number[]
editar_condena=false

  constructor(private formb:FormBuilder) {
    this.years = Array.from({ length: 101 }, (_, i) => i);
    this.months = Array.from({ length: 12 }, (_, i) => i); // [0, 1, 2, ..., 12] arrow 1st element 2nd index
    this.days = Array.from({ length: 32 }, (_, i) => i);   // [0, 1, 2, ..., 31]

 this.form_condena = this.formb.group({
  nombre:["",Validators.required],
  descripcion:[""],
  duracion_anios:[0,[Validators.required]],
  duracion_meses:[0,Validators.required],
  duracion_dias:[0,Validators.required],
  orden_de_gravedad:[10,Validators.required]

})
  }
ngOnInit(){
  if(this.condena!=undefined){
    this.editar_condena=true
    this.form_condena.controls['nombre'].setValue(this.condena.nombre)
    this.form_condena.controls['descripcion'].setValue(this.condena.descripcion)
    this.form_condena.controls['duracion_anios'].setValue(this.condena.duracion_anios)
    this.form_condena.controls['duracion_meses'].setValue(this.condena.duracion_meses)
    this.form_condena.controls['duracion_dias'].setValue(this.condena.duracion_dias)
    this.form_condena.disable()
  }
 }



editarCondena(){
  console.log("editar condena")
  this.form_condena.enable()
}

setYear(){
  this.form_condena.controls['duracion_anios'].setValue(Number(this.form_condena.value.duracion_anios))
}
setMonth(){
  this.form_condena.controls['duracion_meses'].setValue(Number(this.form_condena.value.duracion_meses))
}
setDay(){
  this.form_condena.controls['duracion_dias'].setValue(Number(this.form_condena.value.duracion_dias))
}

enviarFormCondenaValue(){
  this.sendFormCondenaValue.emit(this.form_condena.value)
  this.form_condena.disable()
}


}
