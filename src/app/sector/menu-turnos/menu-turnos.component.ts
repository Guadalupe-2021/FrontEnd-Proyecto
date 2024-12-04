import { Component, OnInit } from '@angular/core';
import { SectorService } from '../sector.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';


@Component({
  selector: 'app-menu-turnos',
  standalone: true,
  imports: [RouterLink,NgFor,NgIf],
  templateUrl: './menu-turnos.component.html',
  styleUrl: './menu-turnos.component.css'
})
export class MenuTurnosComponent implements OnInit {
  constructor (public service : SectorService,public route: ActivatedRoute){
    let codi_sector = route.snapshot.params['sector'];
    console.log(route)
    service.sector.cod_sector=codi_sector
    }
  finalizar:string|undefined
  crear:string|undefined
  bandera:boolean|undefined
  turnos:{cod_guardia_cod_guardia:number,cod_sector_cod_sector:number,turno:string,fecha_ini:Date,fecha_fin:Date}[]|undefined
  cod_sector:string|undefined

  ngOnInit(): void {
    this.cod_sector = this.route.snapshot.params['sector']
    this.service.getTurnosDeSector(this.cod_sector).subscribe({
      next:(data)=>{
        if(data.status==201) {
          this.turnos = data.data
          console.log("Turnos obtenidos:",data.data)
        }
      },
      error:(e)=>{
        console.log("turnos no obtenidos",e)
      }})
  }
  
}
