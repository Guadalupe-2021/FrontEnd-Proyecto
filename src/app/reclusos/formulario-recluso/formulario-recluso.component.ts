import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { IRecluso } from '../../shared/entity.interfaces.js';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DatePipe, NgIf } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ReclusosService } from '../reclusos.service.js';

@Component({
  selector: 'app-formulario-recluso',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,NgIf,DatePipe, RouterLink],
  templateUrl: './formulario-recluso.component.html',
  styleUrl: './formulario-recluso.component.css',
  providers:[DatePipe]
})
export class FormularioReclusoComponent  implements OnInit {
  @Output() sendFormReclusoValue: EventEmitter<IRecluso> = new EventEmitter<IRecluso>();
  @Output() sendFormValueForFreedom: EventEmitter<IRecluso> = new EventEmitter<IRecluso>();
  @Input() recluso!: IRecluso;

  @ViewChild('elRecluso') reclusoElement!:ElementRef
  

  form_recluso:FormGroup
  contrato_finalizado = false
  modificar_recluso = false
 
  recluso_liberado=false
  notClicked = true
  nueva_fecha!:Date

constructor (public _service_reclcuso: ReclusosService,
  private formb:FormBuilder,
  private toastr:ToastrService,
  private datePipe: DatePipe,
  public router:Router,
  private route:ActivatedRoute,
) {
  
  this.form_recluso = this.formb.group({
  nombre:["",Validators.required],
  apellido:["",Validators.required],
  dni:["",[Validators.required,Validators.minLength(8),Validators.maxLength(10)]],
  fecha_nac:["",Validators.required]

 })

}


ngOnInit() {
  console.log('recluso: ',this.recluso)
  if(this.recluso!=undefined){
  this.modificar_recluso = true
  this.form_recluso.controls['nombre'].setValue(this.recluso.nombre)
  this.form_recluso.controls['apellido'].setValue(this.recluso.apellido)
  this.form_recluso.controls['dni'].setValue(this.recluso.dni)
  this.form_recluso.get('fecha_nac')?.setValue(
    this.datePipe.transform(this.recluso.fecha_nac, 'yyyy-MM-dd'));
 // yyyy-MM-dd es el formato necesario para que el valor de la fecha se pueda setear sin problemas en input type date
    if(this.route.snapshot.params["cod_recluso"]!=undefined) this.notClicked=false

 this.form_recluso.disable()
  }
}

enviarFormReclusoValue(){
  this.nueva_fecha = new Date(this.form_recluso.value.fecha_nac)
  this.nueva_fecha.setDate(this.nueva_fecha.getDate() + 1)
//al pasar la fecha de string a date se le restaba un dia :(
  this.form_recluso.controls['fecha_nac'].setValue(this.nueva_fecha);
  this.sendFormReclusoValue.emit(this.form_recluso.value);
  this.form_recluso.get('fecha_nac')?.setValue(this.datePipe.transform(this.form_recluso.value.fecha_nac, 'yyyy-MM-dd'));

    this.form_recluso.disable();
}

enviarFormValueForFreedom(){
  console.log("implementar liberar recluso")
  /*
  this.recluso.pena.fecha_fin_real = new Date()
  this.sendValueForFreedom.emit(this.recluso.pena)


     */
}



editarRecluso(){ 
  console.log("editar recluso")
  if(this.recluso.pena?.fecha_fin_real===null){
  this.form_recluso.enable()
  }else{
    this.toastr.error("El Recluso Ya Fue Liberado, No Es Posible Modificar")
    console.log(this.recluso.pena)
  }

}


mostrarDetalles(){
  this.router.navigate([`${this.recluso.cod_recluso}`],{relativeTo:this.route});
}

}
