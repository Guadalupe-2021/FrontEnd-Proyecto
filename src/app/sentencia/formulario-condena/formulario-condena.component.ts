import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { ICondena } from '../../shared/entity.interfaces.js';

@Component({
  selector: 'app-formulario-condena',
  standalone: true,
  imports: [NgFor,FormsModule,ReactiveFormsModule],
  templateUrl: './formulario-condena.component.html',
  styleUrl: './formulario-condena.component.css'
})
export class FormularioCondenaComponent {
 @Input() condena!: ICondena;

selectedYear=100
selectedMonth=12
selectedDay=31
form_condena!:FormGroup
years:any
months:any
days:any

  constructor(private formb:FormBuilder) {
     this.years = Array.from({ length: 101 }, (_, i) => i);
    this.months = Array.from({ length: 13 }, (_, i) => i); // [0, 1, 2, ..., 12] arrow 1st element 2nd index
    this.days = Array.from({ length: 32 }, (_, i) => i);   // [0, 1, 2, ..., 31]

 this.form_condena = this.formb.group({
  titulo:["",Validators.required],
  descripcion:["",Validators.required],
  duracion_anios:["",[Validators.required]],
  duracion_meses:["",Validators.required],
  duracion_dias:["",Validators.required]

})
  }

editarCondena(){
  console.log("editar condena")
}
}
