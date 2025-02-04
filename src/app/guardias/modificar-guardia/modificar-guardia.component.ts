import { Component, Input, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { GuardiasService } from '../guardias.service.js';
import { IGuardia } from '../../shared/entity.interfaces.js';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-modificar-guardia',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,NgFor,NgIf,DatePipe],
  templateUrl: './modificar-guardia.component.html',
  styleUrl: './modificar-guardia.component.css',
  providers:[DatePipe]
})
export class ModificarGuardiaComponent implements OnInit {
  @Input() guardia!: IGuardia;
  
form_guardia:FormGroup
today= new Date
fecha_sanitizada!: string
fecha_fin_sanitizada!: string
contrato_finalizado = false
modificar=false

constructor (public _service_guard: GuardiasService,
  private formb:FormBuilder,
  private toastr:ToastrService,
  private datePipe: DatePipe,
  public router:Router,private route:ActivatedRoute,
) {

//console.log(this.today.toLocaleDateString("es-AR")) // Date--->'dd/mm/yyyy'
//this.fecha = new Date(this.unGuardia.fecha_ini_contrato)  // new Date(unString) de string--->Date
//console.log(this.fecha.toLocaleDateString("es-AR"))  // unaDate.toLocaleString(formatoPais)--->dd/mm/yyyy(string)

this.form_guardia = this.formb.group({
  nombre:["",Validators.required],
  apellido:["",Validators.required],
  dni:["",[Validators.required,Validators.minLength(8)]], //${this.unGuardia.dni}
  fecha_ini_contrato:["",Validators.required] //(new Date(this.unGuardia.fecha_ini_contrato).toLocaleDateString("es-AR"))
})
}

ngOnInit() {
  this.form_guardia.setControl('nombre', this.formb.control(this.guardia.nombre, [Validators.required]));
  this.form_guardia.setControl('apellido', this.formb.control(this.guardia.apellido, [Validators.required]));
  this.form_guardia.setControl('dni', this.formb.control(this.guardia.dni, [Validators.required,Validators.minLength(8)]));
  this.form_guardia.setControl('fecha_ini_contrato_txt',
    this.formb.control(this.datePipe.transform(this.guardia.fecha_ini_contrato, 'dd/MM/yyyy'), [Validators.required]));

  this.form_guardia.setControl('fecha_ini_contrato',this.formb.control(this.guardia.fecha_ini_contrato, [Validators.required]));

    if(this.guardia.fecha_fin_contrato!=null) this.contrato_finalizado=true
 this.form_guardia.disable()
}

changeInputToDate(){ this.modificar= true }

enviarModificacion(guard:IGuardia){
  console.log(this.form_guardia.disabled)
  if(this.form_guardia.disabled){
    this.toastr.error("ERROR Debe Habilitar El Modo Edicion")
  }else{
    guard.apellido = this.form_guardia.value.nombre
    guard.nombre = this.form_guardia.value.apellido
    guard.dni = this.form_guardia.value.dni

    if(this.modificar){
      guard.fecha_ini_contrato = this.form_guardia.value.fecha_ini_contrato
    }else{
      guard.fecha_ini_contrato = this.convertToDate(this.form_guardia.value.fecha_ini_contrato_txt)
    }
    this._service_guard.putGuardia(guard.cod_guardia,guard).subscribe({
    next:(serverResponse)=>{
      this.toastr.success(serverResponse.message)
      console.log(serverResponse.data)
      this.form_guardia.disable()
    },
    error: (e)=>{
      console.log(e)
      this.toastr.error(e.message)
    }
    })
  }
}

convertToDate(dateString: string): Date {
  const [day, month, year] = dateString.split('/'); // Split the string into day, month, and year
  return new Date(+year, +month - 1, +day); // Create a Date object
}

editarGuardia(guard:IGuardia){
  //this.router.navigate(["../"+`${guardia.cod_guardia}`+"/modificar"], {relativeTo: this.route}); 
if(this.guardia.fecha_fin_contrato==null){
  this.form_guardia.enable()
}else{
this.toastr.error("Contrato Finalizado. No se Permiten Modificaciones")
  }
}


dateChange(){
console.log("date change")
}
finalizarContrato(guard:IGuardia){
if (guard.fecha_fin_contrato===null){
    guard.fecha_fin_contrato = new Date()
    this._service_guard.putGuardia(guard.cod_guardia,guard).subscribe({
      next:(serverResponse)=>{
      this.toastr.success("Contrato Finalizado")
      console.log(serverResponse.data)
      this.contrato_finalizado = true
    },
    error: (e)=>{
      console.log(e)
      this.toastr.error(e.message)
    }
    })

  }else{this.toastr.error("El Contrato ya se Encuentra Finalizado")}
}



}
