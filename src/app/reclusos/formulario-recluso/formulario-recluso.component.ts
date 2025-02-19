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
  @Output() sendFormValueForDate: EventEmitter<IRecluso> = new EventEmitter<IRecluso>();
  @Input() recluso!: IRecluso;

  @ViewChild('elRecluso') reclusoElement!:ElementRef

  form_recluso:FormGroup
  contrato_finalizado = false
  modificar_recluso = false
  fecha_fin!:Date
  recluso_liberado=false
  notClicked = true

constructor (public _service_reclcuso: ReclusosService,
  private formb:FormBuilder,
  private toastr:ToastrService,
  private datePipe: DatePipe,
  public router:Router,
  private route:ActivatedRoute,
  private renderer: Renderer2
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
 //if(this.recluso.fecha_fin_contrato!=null) this.contrato_finalizado=true
 this.form_recluso.disable()
  }
}

enviarFormReclusoValue(){
  console.log("enviando datos del fomulario",this.form_recluso.value)
  this.form_recluso.controls['fecha_nac'].setValue(new Date(this.form_recluso.value.fecha_nac))

    this.sendFormReclusoValue.emit(this.form_recluso.value);

  this.form_recluso.get('fecha_nac')?.setValue(this.datePipe.transform(this.form_recluso.value.fecha_nac, 'yyyy-MM-dd'));
    if(this.modificar_recluso){
      this.form_recluso.disable()
    }else{
      // cheuqear por las condenas
      this.form_recluso.disable()
      //this.form_recluso.reset()
    } 
    
}

enviarFormValueForFreedom(){
  if(!this.contrato_finalizado){
    this.fecha_fin = new Date()
    this.form_recluso.addControl('fecha_fin_contrato', this.formb.control(this.fecha_fin, [Validators.required]));
       this.sendFormValueForDate.emit(this.form_recluso.value); 
       //this.recluso.fecha_fin_contrato = this.fecha_fin
       this.contrato_finalizado = true
       this.form_recluso.disable()
  }else{
    this.toastr.error("El Contrato ya se Encuentra Finalizado")
  }
}



editarRecluso(){ 
  console.log("editar recluso")
  this.form_recluso.enable()
  // if(this.recluso.pena.fecha_fin > new Date())
//if(this.recluso.fecha_fin_contrato==null){
//  this.form_recluso.enable()
//}else{
//this.toastr.error("Recluso ya fue liberado. No se Permiten Modificaciones")
//  }
}

  //verDetalleSector(cod_sector:any){
  //this.router.navigate([`${cod_sector}` + "/detalle-sector"], { relativeTo: this.route });}



mostrarDetalles(){
  this.router.navigate([`${this.recluso.cod_recluso}`],{relativeTo:this.route});
}

}
