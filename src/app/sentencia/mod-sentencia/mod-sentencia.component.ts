import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule,FormControl,FormGroup, Validators } from '@angular/forms'; 
import { Input, input, Output, output,EventEmitter } from '@angular/core';
import { SentenciasService } from '../sentencias.service.js';
import { formatCurrency } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-mod-sentencia',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,RouterLink],
  templateUrl: './mod-sentencia.component.html',
  styleUrl: './mod-sentencia.component.css'
})
export class ModSentenciaComponent {
  constructor (private service : SentenciasService){
    this.cod_sentencia = new FormControl('',Validators.required)
    this.descripcion = new FormControl('',)
    this.duracion = new FormControl('',)
    this.cantidad_cond = new FormControl('')
    this.fecha_dia = new FormControl('')
    this.fecha_mes = new FormControl('',)
    this.fecha_año = new FormControl('')
    this.nombre = new FormControl('')
  
    this.sActual = new FormGroup({

      cod_sentencia: this.cod_sentencia
      ,nombre: this.nombre
      ,descripcion: this.descripcion
      ,duracion: this.duracion
      ,cantidad_cond: this.cantidad_cond
      ,fecha_dia: this.fecha_dia
      ,fecha_mes: this.fecha_mes
      ,fecha_año: this.fecha_año 
      })
  
      
  };
  
  sActual: FormGroup;
  cod_sentencia:FormControl;
  nombre: FormControl;
  descripcion: FormControl;
  duracion: FormControl;
  cantidad_cond: FormControl;
  fecha_dia: FormControl
  fecha_mes: FormControl
  fecha_año: FormControl


sentencias:any = [];
enviarSentencia(){
  this.cargarSentencias();
  const found = this.sentencias.find((element:any) => element.cod_sentencia === this.cod_sentencia );
  if(found.cod_sentencia === this.cod_sentencia.value){
    let sNueva = this.idenModificacion(found)
    this.service.postSentencias(sNueva).subscribe({next: (data)=> console.log(data),error: (e)=> console.log(e)});
  }else{console.log("no se pudo postear")}
};
cargarSentencias(){
  return this.service.getSentencias().subscribe((x:any) => this.sentencias = x)
}
verFomrulario(){
  let x = {cod_sentencia: 123456,
    descripcion: "exeso de facha"
    ,duracion: 20
    ,cantidad_cond: 30
    ,fecha_ini: "26/02/2001"}

  console.log(this.sActual.value);
  this.idenModificacion(x)
  this.sActual.reset();
}
idenModificacion(valor:any){
  if(this.descripcion.value !!= ''){
    valor.descripcion=this.descripcion.value
  };
  if(this.duracion.value !!= ''){
    valor.duracion=this.duracion.value
  };
  if(this.cantidad_cond.value !!= ''){
    valor.cantidad_cond=this.cantidad_cond.value
  };
  if(this.fecha_dia.value !!= ''){
    valor.fecha_dia=this.fecha_dia.value
  };
  
  if(this.fecha_mes.value !!= ''){
    valor.fecha_mes=this.fecha_mes.value
  };
  
  if(this.fecha_año.value !!= ''){
    valor.fecha_año=this.fecha_año.value
  };
  console.log(valor)
  return valor
}

}
