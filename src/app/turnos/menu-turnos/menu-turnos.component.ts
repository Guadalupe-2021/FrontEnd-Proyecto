import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ISector } from '../../shared/entity.interfaces.js';
import { ToastrService } from 'ngx-toastr';
import { SectorService } from '../../sector/sector.service.js';

@Component({
  selector: 'app-menu-turnos',
  standalone: true,
  imports: [NgFor],
  templateUrl: './menu-turnos.component.html',
  styleUrl: './menu-turnos.component.css'
})
export class MenuTurnosComponent implements OnInit{
  sectores:ISector[] = []
  selectedTurno:string=''
  selectedDays:number[] = []
  selectedSector:ISector[] = []
  constructor(private toastr:ToastrService,
    private _service_sector:SectorService
  ){}
  ngOnInit(){
    this._service_sector.getAll().subscribe({
      next:(data)=>{
        this.sectores = data
      },
      error:(e)=>{
        console.log(e)
        this.toastr.error("No se Pudieron cargar los Sectores")
      }
    })
  }
selectSector(cod_sector:string){
  console.log("selected")
}
selectTurno(tipo_turno:string){
  this.selectedTurno = tipo_turno
}
selectWeekDays(dia_semana:number){
 if(this.selectedDays.includes(dia_semana)){
  this.selectedDays = this.selectedDays.filter(v => v !== dia_semana);
 }else{
 if(this.selectedDays.length===5){
  this.toastr.error("Máximo de 5 Días o 40 Horas Semanales")
  return }
 this.selectedDays.push(dia_semana) 
 }
 
}
}
