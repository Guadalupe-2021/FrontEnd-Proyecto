import { Component } from '@angular/core';
import { ReclusosService } from '../reclusos.service.js';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SectorService } from '../../sector/sector.service.js';

@Component({
  selector: 'app-mover-recluso',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './mover-recluso.component.html',
  styleUrl: './mover-recluso.component.css'
})
export class MoverReclusoComponent {
constructor(public sRecluso : ReclusosService,public sSector: SectorService){
  this.cod_recluso= new FormControl('',[Validators.required,Validators.maxLength(30)]);
    this.nombre= new FormControl('',[Validators.required,]);
    this.apellido= new FormControl('',[Validators.required,]);
    this.dni= new FormControl('',[Validators.required,]);
    this.cod_celda = new FormControl('',[Validators.required])
    this.cod_sector = new FormControl('',[Validators.required])
  
  
  this.recluso = new FormGroup({
        nombre: this.nombre,
        cod_recluso: this.cod_recluso,
        apellido: this.apellido,
        dni: this.dni})
  this.celda =new FormGroup({
          cod_celda:this.cod_celda,
          cod_sector:this.cod_sector
        })
      
}
  recluso  : FormGroup;
  nombre : FormControl;
  apellido : FormControl;
  cod_recluso: FormControl;
  cod_celda: FormControl;
  cod_sector: FormControl;
  dni: FormControl;
  celda: FormGroup;
  bandRecluso:boolean|undefined
  bandCelda:boolean|undefined
  validarCelda(){
    let found1 =this.sRecluso.celdas.find((element: any) => element.id == this.cod_celda.value);
    console.log(this.sRecluso.celdas)
    console.log(this.cod_celda.value)
    console.log(this.cod_sector.value)
    let found2 =this.sRecluso.celdas.find((element: any) => element.userId == this.cod_sector.value);
    if(found1 != undefined && found2 != undefined){
      this.sSector.postSector(this.celda.value).subscribe({
        next:(data)=>{
          console.log("los cambios fueron enviados")
          this.bandRecluso=undefined
          this.bandCelda=true},
        error:(e)=>{console.log(e)}
      })
    }else{this.bandCelda=false}
    console.log(found1)
    console.log(found2)
  }

  validarRecluso(){
    this.sRecluso.getOneRecluso(this.cod_recluso.value).subscribe({
      next: (data)=>{this.sRecluso.recluso=data
        this.bandRecluso= true
        this.sRecluso.getCelda().subscribe({
          next:(data)=>{this.sRecluso.celdas=data},
          error: (e)=>{console.log(e)}})
        },
      error: (e)=>{console.log(e)
        this.bandRecluso = false
        }
      })
      console.log(this.sRecluso.celdas)
  }
}
