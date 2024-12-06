import { Component, OnInit } from '@angular/core';
import { TallerService } from '../taller.service.js';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-modificar-taller',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './modificar-taller.component.html',
  styleUrl: './modificar-taller.component.css'
})
export class ModificarTallerComponent implements OnInit{
  constructor (public service : TallerService){
    this.cod_taller= new FormControl('',[Validators.maxLength(30)]);
    this.decripcion= new FormControl('',[]);
    this.nombre= new FormControl('',[]);
    this.locacion= new FormControl('',[]);
    this.hora_inicio= new FormControl('',[]);
    this.dia_de_la_semana = new FormControl('',[])
    this.hora_fin= new FormControl('',[]);
    this.cantMin= new FormControl('',[]);
    this.estado = new FormControl(false,[]);
    
  
  this.taller = new FormGroup({
        nombre:this.nombre,
        decripcion: this.decripcion,
        cod_taller: this.cod_taller,
        locacion: this.locacion,
        hora_inicio: this.hora_inicio,
        dia_de_la_semana:this.dia_de_la_semana,
        hora_fin:this.hora_fin,
        cantMin:this.cantMin,
        estado:this.estado
        
      })      
}
  taller  : FormGroup;
  nombre:FormControl;
  decripcion : FormControl;
  locacion : FormControl;
  cod_taller: FormControl;
  dia_de_la_semana: FormControl;
  hora_inicio: FormControl;
  hora_fin: FormControl;
  cantMin: FormControl;
  estado:FormControl;
  bandera: undefined|string
  ngOnInit(): void {
    this.service.getTalleres().subscribe({
      next:(data)=>{
        if(data.status === 201){
          this.service.talleres=data
          console.log("talleres obtenidos")
        }},
      error:(e)=>{console.log(e)}})
  }
  modificarTalller(x:any){
    if(x.inscripcion!== true ){x.inscripcion = true}
    else if(x.inscripcion == true){x.inscripcion=false}
    console.log(x)
  }
  enviarModificacion(x:any){
    if(this.nombre.value!==''){x.nombre=this.nombre.value}else{x.nombre=undefined}
    if(this.dia_de_la_semana.value!==''){x.dia_de_la_semana=this.dia_de_la_semana.value}else{x.diaDeLaSemana=undefined}
    if(this.decripcion.value!==''){x.decripcion=this.decripcion.value}else{x.descipcion=undefined}
    if(this.locacion.value!==''){x.locacion=this.locacion.value}else{x.locacion=undefined}
    if(this.hora_inicio.value!==''){x.hora_inicio=this.hora_inicio.value}else{x.hora_inicio=undefined}
    if(this.hora_fin.value!==''){x.hora_fin=this.hora_fin.value}else{x.hora_fin=undefined}
    if(this.cantMin.value!==''){x.cantMin=this.cantMin.value}else{x.cantMin=undefined}
    if(this.estado.value==true){x.estado=0}else if(this.estado.value==false){x.estado=1}
    this.service.putTaller(x).subscribe({
      next:(data)=>{
        if(data.status=== 201){
          console.log(data)
          console.log("taller modificado")
          this.bandera='modificado'
        }},
      error:(e)=>{
        if(e.status=== 404){
          console.log("taller no modificado ")
          this.bandera='no modificado'
        }}})
    console.log(x)
    console.log(this.taller.value)
    this.taller.reset()
  }
}
