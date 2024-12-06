import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ReclusosService } from '../../reclusos/reclusos.service.js';
import { ActividadService } from '../../actividades/actividad.service.js';

@Component({
  selector: 'app-incribirse-ilegal',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './incribirse-ilegal.component.html',
  styleUrl: './incribirse-ilegal.component.css'
})
export class IncribirseIlegalComponent implements OnInit{
  constructor (public service : ActividadService,public sRecluso : ReclusosService){
    this.cod_recluso= new FormControl('',[Validators.required,]);
  this.recluso = new FormGroup({
        cod_recluso:this.cod_recluso
      })    
  }
  ngOnInit(): void {
    this.service.getIlegales().subscribe({
      next:(data)=>{
        if(data.status== 201){
          console.log("se recuperaron las actividades",data)
          this.service.ilegales=data
        }},
      error:(e)=>{
        if(e.status == 404){
          console.log("no se recuperaron las actividades",e)
        }
      }})
  }
  recluso  : FormGroup;
  
  cod_recluso: FormControl;
  banderaRecluso:string|undefined
  inscriptos = []
  ingresarIsncripcion(x:any){
    if(x.inscripcion!== true ){x.inscripcion = true}
    else if(x.inscripcion == true){x.inscripcion=false}
    console.log(x)
  }
  validarRecluso(x:any){
    console.log("codigo de actividad" ,x)
    console.log("codigo de recluso" ,this.cod_recluso.value)
    this.service.InscribirActividadIlegal(x.cod_act_ilegal,this.cod_recluso.value).subscribe({
      next:(data)=>{
        console.log("data",data.status);
        if(data.status == 201){
          console.log("recluso inscripto ",data.status)
          this.banderaRecluso='inscripto'
        }
        if(data.status== 405){
          console.log("actividad no encontrada ",data.status)
          this.banderaRecluso='no encontrada'
        }
        if(data.status == 409){
          console.log("no hay mas lugar", data.status)
          this.banderaRecluso='lleno'
        }
        if(data.status == 408){
          console.log("recluso ya inscripto", data.status)
          this.banderaRecluso='existente'
        }
      },
      error:(e)=>{
        console.log("error ", e.status)
        if(e.status == 404){
          console.log("recluso no encontrado ",e.status)
          this.banderaRecluso='no inscripto'
        }
        if(e.status == 409){
          console.log("no hay mas lugar", e.status)
          this.banderaRecluso='lleno'
        }
        if(e.status== 405){
          console.log("actividad no encontrada ",e.status)
          this.banderaRecluso='no encontrada'
        }
        }})
      this.recluso.reset();
      }
      
    }
    
 
  
