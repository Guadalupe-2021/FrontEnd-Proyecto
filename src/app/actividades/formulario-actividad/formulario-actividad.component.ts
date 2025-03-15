import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IActividad } from '../../shared/entity.interfaces.js';

@Component({
  selector: 'app-formulario-actividad',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,NgIf,NgFor],
  templateUrl: './formulario-actividad.component.html',
  styleUrl: './formulario-actividad.component.css'
})
export class FormularioActividadComponent implements OnInit{

@Input() actividad!: IActividad
@Output() sendFormActividadValue: EventEmitter<IActividad> = new EventEmitter<IActividad>()
@Output() deleteActividad: EventEmitter<number> = new EventEmitter<number>()



  form_actividad:FormGroup
  hora_ini_arr:string[] = []
  hora_fin_arr:string[] = []
  cant_cupos_arr:number[] =[]
  modificar_actividad!:boolean

  hora_inicio!:string
  hora_fin!:string


  constructor(private formb:FormBuilder){
    this.form_actividad= this.formb.group({
      nombre:['',Validators.required],
      descripcion:[''],
      cod_sector:['',Validators.required],
      hora_inicio:['12:00',Validators.required],
      hora_fin:['13:00',Validators.required],
      dia_de_la_semana:['',Validators.required],
      cant_cupos:[5,Validators.required],

    })

  }
ngOnInit(): void {
  this.actividad!=undefined? this.modificar_actividad=true : this.modificar_actividad=false
  if(this.actividad!=undefined){
    console.log(this.actividad)
    //this.form_actividad.get('hora_inicio')?.reset();
    //this.form_actividad.get('hora_fin')?.reset();
    this.form_actividad.controls['nombre'].setValue(this.actividad.nombre)
    this.form_actividad.controls['descripcion'].setValue(this.actividad.descripcion)
    this.form_actividad.controls['cod_sector'].setValue(this.actividad.cod_sector)
    this.form_actividad.controls['hora_inicio'].setValue(this.actividad.hora_inicio)
    this.form_actividad.controls['hora_fin'].setValue(this.actividad.hora_fin)
    this.form_actividad.controls['dia_de_la_semana'].setValue(this.actividad.dia_de_la_semana)
    this.form_actividad.controls['cant_cupos'].setValue(this.actividad.cant_cupos)

    // para que se vean los cambios en el select
    this.cant_cupos_arr = [this.actividad.cant_cupos]
    this.hora_ini_arr = [this.actividad.hora_inicio]
    this.hora_fin_arr = [this.actividad.hora_fin]

    this.form_actividad.disable()

  }else{

    this.setCantCuposOptions()
    this.setHoraInicioOptions()
    this.setHoraFinOptions()
  }
  
}
setHoraInicioOptions(){
    this.hora_ini_arr = []
    for(let i=12;i<18;i++){
      this.hora_ini_arr.push(`${i}:00`)
      this.hora_ini_arr.push(`${i}:30`)
      }
    this.hora_ini_arr.push(`${18}:00`)
    this.setHoraFinOptions()

}
setHoraFinOptions(){
  this.hora_fin_arr = []
  const [hora,minutos] = this.form_actividad.value.hora_inicio.split(":")
  for(let i=1;i<3;i++){
    this.hora_fin_arr.push(`${Number(hora)+i}:${Number(minutos)===0? '00':'30'}`)
    if(minutos==='30' && i < 2) this.hora_fin_arr.push(`${Number(hora)+i+1}:00`)
    if(minutos==='00' && i < 2) this.hora_fin_arr.push(`${Number(hora)+i}:30`)
  }

}

setCantCuposOptions(){
  this.cant_cupos_arr = []
  for(let i=5; i<=30;i++) this.cant_cupos_arr.push(i)
}

enviarValorFormulario(){
  console.log("crear actividad")
  console.log(this.form_actividad.value)
  this.sendFormActividadValue.emit(this.form_actividad.value)

}

changeHoraInicio(){
  const [hora,minutos] = this.form_actividad.value.hora_inicio.split(":")
  this.form_actividad.controls['hora_fin'].setValue(`${Number(hora)+1}:${Number(minutos)===0? '00':'30'}`)
}

editarActividad(){
  this.form_actividad.enable()
}
eliminarActividad(){
  console.log("eliminar actividad")
  this.deleteActividad.emit(this.actividad.cod_actividad)
}

}
