import { Component } from '@angular/core';
import { TallerService } from '../taller.service.js';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ReclusosService } from '../../reclusos/reclusos.service.js';

@Component({
  selector: 'app-inscripcion-taller',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './inscripcion-taller.component.html',
  styleUrl: './inscripcion-taller.component.css'
})
export class InscripcionTallerComponent {
  constructor (public service : TallerService,public sRecluso : ReclusosService){
    this.cod_recluso= new FormControl('',[Validators.required,Validators.maxLength(30)]);
  this.recluso = new FormGroup({
        cod_recluso: this.cod_recluso,
      })    
  }
  recluso  : FormGroup;
  cod_recluso: FormControl;
  banderaRecluso:string|undefined

  ngOnInit(): void {
    this.service.getTalleres().subscribe({
      next:(data)=>{
        if(data.status == 201){
          console.log
          this.service.talleres=data
        }
      },
      error:(e)=>{console.log(e)}})
  }
  ingresarIsncripcion(x:any){
    if(x.inscripcion!== true ){x.inscripcion = true}
    else if(x.inscripcion == true){x.inscripcion=false}
    console.log(x)
  }
  validarRecluso(x:any){
    console.log("codigo de actividad" ,x)
    console.log("codigo de recluso" ,this.cod_recluso.value)
    this.service.postIncripcionTaller(x.cod_taller,this.cod_recluso.value).subscribe({
      next:(data)=>{
        console.log("data",data.status);
        if(data.status == 201){
          console.log("recluso inscripto ",data.status)
          this.banderaRecluso='inscripto'
        }
        if(data.status== 403){
          console.log("taller no encontrada ",data.status)
          this.banderaRecluso='no encontrada'
        }
        if(data.status == 410){
          console.log("estado ocupado", data.status)
          this.banderaRecluso='ocupado'
        }
        if(data.status == 409){
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
        if(e.status == 410){
         console.log("estado ocupado", e.status)
          this.banderaRecluso='ocupado'
        }
        if(e.status== 403){
          console.log("taller no encontrada ",e.status)
          this.banderaRecluso='no encontrada'
        }
        if(e.status == 409){
          console.log("recluso ya inscripto", e.status)
          this.banderaRecluso='existente'
        }
      }})
      this.recluso.reset();
      }
}
