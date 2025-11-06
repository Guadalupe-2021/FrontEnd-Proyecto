import { DatePipe, NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GuardiasService } from '../guardias.service';
import { IGuardia } from '../../shared/entity.interfaces';

@Component({
  selector: 'app-formulario-guardia',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,NgFor,NgIf,DatePipe],
  templateUrl: './formulario-guardia.component.html',
  styleUrl: './formulario-guardia.component.css'
})
export class FormularioGuardiaComponent implements OnInit {
  @Output() sendFormValue: EventEmitter<IGuardia> = new EventEmitter<IGuardia>();
  @Output() sendFormValueForDate: EventEmitter<IGuardia> = new EventEmitter<IGuardia>();

  @Input() guardia!: IGuardia;

  form_guardia:FormGroup
  contrato_finalizado = false
  modificar_guardia = false
  fecha_fin!:Date
  nueva_fecha!:Date

constructor (public _service_guard: GuardiasService,
  private formb:FormBuilder,
  private toastr:ToastrService,
  private datePipe: DatePipe,
  public router:Router,
) {
  
  this.form_guardia = this.formb.group({
  nombre:["",Validators.required],
  apellido:["",Validators.required],
  dni:["",[Validators.required,Validators.minLength(8),Validators.maxLength(10)]], //${this.unGuardia.dni}
  fecha_ini_contrato:["",Validators.required] //(new Date(this.unGuardia.fecha_ini_contrato).toLocaleDateString("es-AR"))
})
}



ngOnInit() {
  if(this.guardia!=undefined){
  this.modificar_guardia = true
  this.form_guardia.controls['nombre'].setValue(this.guardia.nombre)
  this.form_guardia.controls['apellido'].setValue(this.guardia.apellido)
  this.form_guardia.controls['dni'].setValue(this.guardia.dni)
  this.form_guardia.get('fecha_ini_contrato')?.setValue(
    this.datePipe.transform(this.guardia.fecha_ini_contrato, 'yyyy-MM-dd'));
 //this.form_guardia.patchValue({fecha_ini_contrato: '2025-02-04',});
 // yyyy-MM-dd es el formato necesario para que el valor de la fecha se pueda setear sin problemas en input type date

 if(this.guardia.fecha_fin_contrato!=null) this.contrato_finalizado=true
 this.form_guardia.disable()
  }
}

enviarFormValue(){
  this.nueva_fecha = new Date(this.form_guardia.value.fecha_ini_contrato)
  this.nueva_fecha.setDate(this.nueva_fecha.getDate() + 1)
  this.form_guardia.controls['fecha_ini_contrato'].setValue(this.nueva_fecha);
    this.sendFormValue.emit(this.form_guardia.value); // emitir al componente padre
  this.form_guardia.get('fecha_ini_contrato')?.setValue(this.datePipe.transform(this.form_guardia.value.fecha_ini_contrato, 'yyyy-MM-dd'));
    if(this.modificar_guardia){
      this.form_guardia.disable()
    }else{
      this.form_guardia.reset()
    } 
    
}

enviarFormValueForDate(){
  if(!this.contrato_finalizado){
    this.fecha_fin = new Date()
    this.form_guardia.addControl('fecha_fin_contrato', this.formb.control(this.fecha_fin, [Validators.required]));
       this.sendFormValueForDate.emit(this.form_guardia.value); 
       this.guardia.fecha_fin_contrato = this.fecha_fin
       this.contrato_finalizado = true
       this.form_guardia.disable()
  }else{
    this.toastr.error("El Contrato ya se Encuentra Finalizado")
  }
}

editarGuardia(){ 
if(this.guardia.fecha_fin_contrato==null){
  this.form_guardia.enable()
}else{
this.toastr.error("Contrato Finalizado. No se Permiten Modificaciones")
  }
}


}
