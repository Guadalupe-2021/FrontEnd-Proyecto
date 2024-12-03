import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SectorService } from '../sector.service.js';
import { ActivatedRoute, RouterLink} from '@angular/router';

@Component({
  selector: 'app-finalizar-turnos',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule, RouterLink],
  templateUrl: './finalizar-turnos.component.html',
  styleUrl: './finalizar-turnos.component.css'
})
export class FinalizarTurnosComponent {
  constructor (public service : SectorService,public route: ActivatedRoute){
    let codi_sector=this.route.snapshot.params['sector']
    this.cod_guardia= new FormControl('',[Validators.required,Validators.maxLength(30)]);
    this.turno= new FormControl('',[Validators.required,Validators.maxLength(30)]);
    this.cod_sector= new FormControl(service.sector.cod_sector);
    this.baja_turno = new FormGroup({
      cod_guardia: this.cod_guardia,
      turno: this.turno,
      cod_sector: this.cod_sector
      })
  }
    baja_turno  : FormGroup;
    cod_guardia: FormControl;
    turno: FormControl;
    cod_sector: FormControl
    bandera:string |undefined
    darBajaTurno(){
      console.log(this.route.snapshot.params['sector'])
      this.baja_turno.value.cod_sector=Number.parseInt(this.route.snapshot.params['sector'])
      console.log(this.baja_turno.value.cod_sector)
      this.service.putBajaTurno(this.cod_guardia.value,this.baja_turno.value.cod_sector,this.turno.value).subscribe({
          next:(data)=>{
            console.log("estatus:",data.status)
            if(data.status == 201){
              console.log("el turno se borro correctamente")
              this.bandera='exito'
            }
          },
          error:(e)=>{
            console.log("estatus:",e.status)
            if(e.status==409){
              console.log("no existe turno ")
              this.bandera='no turno'
            }
            if(e.status==404){
              console.log("no existe turno ")
              this.bandera='no guardia'
            }
          }
        }
      )
    }
}
