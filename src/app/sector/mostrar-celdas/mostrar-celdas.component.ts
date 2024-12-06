import { Component, OnInit } from '@angular/core';
import { SectorService } from '../sector.service.js';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-mostrar-celdas',
  standalone: true,
  imports: [],
  templateUrl: './mostrar-celdas.component.html',
  styleUrl: './mostrar-celdas.component.css'
})
export class MostrarCeldasComponent implements OnInit {
  constructor (public _serviceSector : SectorService,public route: ActivatedRoute){}
  celdas:any
  cod_sector:string|undefined
  ngOnInit(): void {
    console.log("ruta snapchot")
    this.cod_sector = this.route.snapshot.params['sector']
    console.log(this.cod_sector)
    this._serviceSector.getCeldasDSeSector(this.cod_sector).subscribe({
      next:(data)=>{
        if (data.status=201)
        this.celdas = data.data;
        console.log("Devolucion: ",data.data)
      },
      error:(e)=>{console.log(e)}})
  }
}
