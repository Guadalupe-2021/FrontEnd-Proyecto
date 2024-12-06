import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ReclusosService } from '../reclusos.service.js';
import { SentenciasService } from '../../sentencia/sentencias.service.js';

@Component({
  selector: 'app-alta-reclusos',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './alta-reclusos.component.html',
  styleUrl: './alta-reclusos.component.css'
})
export class AltaReclusosComponent implements OnInit{
  constructor (public service : ReclusosService,public sSentencia : SentenciasService){
    this.fecha_nac= new FormControl('',[Validators.required,]);
    this.nombre= new FormControl('',[Validators.required,]);
    this.apellido= new FormControl('',[Validators.required,]);
    this.dni= new FormControl('',[Validators.required,]);
    this.cod_sentencia = new FormControl('',)
  
  
  this.recluso = new FormGroup({
    nombre:this.nombre ,
    apellido: this.apellido, 
    dni: this.dni,
    fecha_nac:this.fecha_nac   
  })
  this.condena =new FormGroup({
    cod_sentencia:this.cod_sentencia
  })
  
}
  ngOnInit(): void {
    this.sSentencia.getSentencias().subscribe({
      next:(data)=>{
        console.log(this.sSentencia.sentencias)
        this.sSentencia.sentencias=data
        console.log("sentencias obtenidas")
        console.log(this.sSentencia.sentencias)
        
      },
      error:(e)=>{
        console.log("error en cargar sentencias")
        
      }})
  }


  
  recluso  : FormGroup;
  nombre : FormControl;
  apellido : FormControl;
  fecha_nac: FormControl;
  cod_sentencia: FormControl;
  dni: FormControl;
  bandRecluso :string | undefined
  bandCelda :boolean | undefined
  condena: FormGroup;
  respuesta:any = []
  value:string|undefined
  cod_rec: number | undefined


validarRecluso(){ 
  this.service.postRecluso(this.recluso.value).subscribe({
    next: (data)=>{
      console.log("status",data.status)

      this.cod_rec = data.data
      if(data.status == 201){
        console.log("recluso creado")
        this.service.recluso = data
        this.bandRecluso = 'exito'
      }
      if(data.status == 202 ) {
        console.log("recluso existente")
        this.bandRecluso= 'exito'      
      }
      if(data.status == 203){
        console.log("recluso tiene condena activa")
        this.bandRecluso='activa'
      }
    }
    ,error: (e)=>{
      if(e.status == 203){
        console.log("recluso tiene condena activa")
        this.bandRecluso='activa'
      }
    }
  })
}

enviarCondena(){
  let sentencia_enviar={
    cod_recluso: this.cod_rec,
    cod_sentencias: this.respuesta
  }
  console.log(sentencia_enviar)
  this.service.postCondena(sentencia_enviar).subscribe({
    next:(data)=>{
      if(data.status == 201){
        console.log("condena posteada")
      }
    },
    error:(e)=>{
      if(e.status == 404){
        console.log("condena no posteada")
      }
    }})
    this.bandRecluso = undefined
    this.recluso.reset()
}

agregarSentencia(sent:any){
  if(this.validarSentencia(sent)){
    this.respuesta.push(sent)
    this.value='true'
  }
  
}
quitarSentencia(sent:any){
  this.respuesta.splice(this.respuesta.findIndex((item: any)=>{item == sent}),1)
  this.value='false'
}
validarSentencia(sent:any){
  let encontrado = this.respuesta.find((x:any)=>x == sent)
  console.log(encontrado)
  if(encontrado == undefined){
    return true
  }
  return false
}

}

