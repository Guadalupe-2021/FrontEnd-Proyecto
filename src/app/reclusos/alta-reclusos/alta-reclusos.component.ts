import { Component, input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators,FormBuilder } from '@angular/forms';
import { ReclusosService } from '../reclusos.service.js';
import { SentenciasService } from '../../sentencia/sentencias.service.js';
import { NgFor } from '@angular/common';
import { FormularioReclusoComponent } from '../formulario-recluso/formulario-recluso.component.js';
import { FormularioCondenaComponent } from '../../sentencia/formulario-condena/formulario-condena.component.js';

@Component({
  selector: 'app-alta-reclusos',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,NgFor,FormularioReclusoComponent,FormularioCondenaComponent],
  templateUrl: './alta-reclusos.component.html',
  styleUrl: './alta-reclusos.component.css'
})

export class AltaReclusosComponent implements OnInit{


  form_recluso:FormGroup
  constructor (public _service_rec : ReclusosService,public _service_sent: SentenciasService,private form: FormBuilder){
this.form_recluso = this.form.group({
  fecha_nac:['',[Validators.required]],
  nombre:['',Validators.required],
  apellido:['',Validators.required],
  dni:['',[Validators.required,Validators.minLength(8)]]
  //cod_sentencia:['',]
})
}
bandRecluso :string | undefined
bandCelda :boolean | undefined
respuesta:any = []
value:string|undefined
cod_rec: number | undefined
sentencias:any[]|undefined
recluso_creado=false

ngOnInit(): void {
  this._service_sent.getSentencias().subscribe({
    next:(data)=>{
      console.log(this._service_sent.sentencias)
      this._service_sent.sentencias=data
      this.sentencias = data
      console.log("sentencias obtenidas:",this._service_sent.sentencias)
    },
    error:(e)=>{
      console.log("error en cargar sentencias:",e)
      }})
    }

registrarRecluso(){ 
  this._service_rec.postRecluso(this.form_recluso.value).subscribe({
    next: (data)=>{
        this.cod_rec = data.data
        console.log("Recluso Creado con Exito")
        this._service_rec.recluso = data
        this.recluso_creado=true

      if(data.status == 203){
        console.log("recluso tiene condena activa")
        this.bandRecluso='activa'
      }
    }
    ,error: (e)=>{
      if(e.status == 203){
        console.log("recluso tiene condena activa")
        this.bandRecluso='activa'
      if(e.status == 409 )console.log("Conflict: Recluso ya Existe")     
      }
    }
  })
}
// UNA VEZ INGRESADO UN RECLUSO VALIDO (DNI UNICO) HAY QUE HACER ALTA CONDENA Y ALTA SENTENCIAS Y QUE SE GUARDEN EN RECLUSO
// DESPUES SE POSTEA EL RECLUSO COMPLETO CON SUS SENTENCIAS Y CONDENAS COMO PROPIEDADES
//this.respuesta.splice(this.respuesta.findIndex((item: any)=>{item == sent}),1)
//this.form_recluso.reset()
nuevaCondena(){
  console.log("nueva condena")
}
}

