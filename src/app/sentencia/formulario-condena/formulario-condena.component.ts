import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ICondena } from '../../shared/entity.interfaces.js';

@Component({
  selector: 'app-formulario-condena',
  standalone: true,
  imports: [NgFor,FormsModule,ReactiveFormsModule],
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

  constructor(private formb:FormBuilder) {
    this.years = Array.from({ length: 101 }, (_, i) => i);
    this.months = Array.from({ length: 12 }, (_, i) => i); // [0, 1, 2, ..., 12] arrow 1st element 2nd index
    this.days = Array.from({ length: 32 }, (_, i) => i);   // [0, 1, 2, ..., 31]

 this.form_condena = this.formb.group({
  nombre:["",Validators.required],
  descripcion:["",Validators.required],
  duracion_anios:[0,[Validators.required]],
  duracion_meses:[0,Validators.required],
  duracion_dias:[0,Validators.required],
  orden_de_gravedad:[10,Validators.required]

})
  }
ngOnInit(){

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
