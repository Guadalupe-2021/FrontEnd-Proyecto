import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActividadService } from '../../actividades/actividad.service.js';

@Component({
  selector: 'app-modificar-ilegal',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './modificar-ilegal.component.html',
  styleUrl: './modificar-ilegal.component.css'
})
export class ModificarIlegalComponent {
  constructor (public service : ActividadService){
    this.decripcion= new FormControl('',[]);
    this.nombre= new FormControl('',[]);
    this.locacion= new FormControl('',[]);
    this.hora_inicio= new FormControl('',[]);
    this.dia_de_la_semana = new FormControl('',[])
    this.hora_fin= new FormControl('',[]);
    this.cantMin= new FormControl('',[]);
    this.estado = new FormControl('',[]);
    this.cantMax = new FormControl('',[]);
    
  
  this.ilegal = new FormGroup({
        nombre:this.nombre,
        decripcion: this.decripcion,
        locacion: this.locacion,
        hora_inicio: this.hora_inicio,
        dia_de_la_semana:this.dia_de_la_semana,
        hora_fin:this.hora_fin,
        cantMax:this.cantMax,
        cantMin:this.cantMin,
        estado:this.estado,
        
      })      
}
  ilegal  : FormGroup;
  nombre:FormControl;
  decripcion : FormControl;
  locacion : FormControl;
  dia_de_la_semana: FormControl;
  hora_inicio: FormControl;
  hora_fin: FormControl;
  cantMin: FormControl;
  estado:FormControl;
  cantMax:FormControl
  bandera: undefined|string
  ngOnInit(): void {
    this.service.getIlegales().subscribe({
      next:(data)=>{this.service.ilegales=data},
      error:(e)=>{console.log(e)}})
  }
  modificarIlegal(x:any){
    if(x.inscripcion!== true ){x.inscripcion = true}
    else if(x.inscripcion == true){x.inscripcion=false}
    console.log(x)
  }
  enviarModificacion(x:any ){
    console.log( "estado:",this.estado.value)
    if(this.nombre.value!==''){x.nombre=this.nombre.value}
    if(this.dia_de_la_semana.value!==''){x.dia_de_la_semana=this.dia_de_la_semana.value}
    if(this.decripcion.value!==''){x.decripcion=this.decripcion.value}
    if(this.locacion.value!==''){x.locacion=this.locacion.value}
    if(this.hora_inicio.value!==''){x.hora_inicio=this.hora_inicio.value}
    if(this.hora_fin.value!==''){x.hora_fin=this.hora_fin.value}
    if(this.cantMin.value!==''){x.cantMin=this.cantMin.value}
    if(this.cantMax.value!==''){x.cantMax=this.cantMax.value}
    if(this.estado.value==true){x.estado=0}else if(this.estado.value== false){x.estado=1}
    this.service.putIlegal(x.cod_act_ilegal,x).subscribe({
      next:(data)=>{
        console.log("status: ",data.status)
        if(data.status == 201){
          console.log("actividad modificada",data)
          this.bandera='modificado'
        }},
      error:(e)=>{
        if(e.status == 404){
          console.log("no se encontro la modificacion ",e)
          this.bandera='no encontrado'
        }
        if(e.status == 409){
          console.log("no es posible modificar",e)
          this.bandera='imposible'
        }
      }})
    console.log(x)
    console.log(this.ilegal.value)
    this.ilegal.reset()
  }
}
