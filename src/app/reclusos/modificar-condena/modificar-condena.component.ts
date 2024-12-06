import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ReclusosService } from '../reclusos.service.js';
import { SentenciasService } from '../../sentencia/sentencias.service.js';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modificar-condena',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './modificar-condena.component.html',
  styleUrl: './modificar-condena.component.css'
})
export class ModificarCondenaComponent implements OnInit{
  constructor(public sRecluso : ReclusosService,public sSentencia: SentenciasService){
    this.cod_recluso= new FormControl('',[Validators.required,Validators.maxLength(30)]);
      this.nombreR= new FormControl('',[Validators.required,]);
      this.apellido= new FormControl('',[Validators.required,]);
      this.dni= new FormControl('',[Validators.required,]);
      this.cod_sentencia = new FormControl('',[Validators.required])
      this.nombreS = new FormControl('',[Validators.required])
    
    
    this.recluso = new FormGroup({
          nombreR: this.nombreR,
          cod_recluso: this.cod_recluso,
          apellido: this.apellido,
          dni: this.dni})
    this.sentencia =new FormGroup({
            cod_sentencia:this.cod_sentencia,
            nombreS:this.nombreS
          })
        
  }
  ngOnInit(): void {
    this.sSentencia.getSentencias().subscribe({
      next:(data)=>{
        this.sSentencia.sentencias=data
        console.log(this.sSentencia.sentencias)
      },
      error:(e)=>{
        console.log(e)
      }})
  }


    recluso  : FormGroup;
    nombreR : FormControl;
    apellido : FormControl;
    cod_recluso: FormControl;
    cod_sentencia: FormControl;
    nombreS: FormControl;
    dni: FormControl;
    sentencia: FormGroup;
    bandRecluso:boolean|undefined
    condena:any = []
    value:string|undefined
  validarRecluso(){
    this.sRecluso.getOneRecluso(this.dni.value).subscribe({
      next:(data)=>{
        this.sRecluso.recluso = data
        this.bandRecluso = true
      },
      error:(e)=>{
        console.log(e)
        this.bandRecluso = false
    }})
    console.log(this.sRecluso.recluso)
  }
  agregarSentencia(sent:any){
    
    if(this.validarSentencia(sent)){
      this.condena.push(sent)
      this.value='true'
    }
    
  }
  quitarSentencia(sent:any){
    this.condena.splice(this.condena.findIndex((item: any)=>{item == sent}),1)
    this.value='false'
  }
  validarSentencia(sent:any){
    let encontrado = this.condena.find((x:any)=>x == sent)
    console.log(encontrado)
    if(encontrado == undefined){
      return true
    }
    return false
  }
  enviarCondena(){
    this.sRecluso.postCondena(this.condena).subscribe({next:(data)=>{console.log(data)},error:(e)=>{console.log(e)}})
  }
}
