import { Component, OnInit } from '@angular/core';
import { SectorService } from '../sector.service.js';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu-sector',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menu-sector.component.html',
  styleUrl: './menu-sector.component.css'
})
export class MenuSectorComponent implements OnInit{
  constructor (public service : SectorService){}
  direccion:string | undefined
  ngOnInit(): void {
    this.service.getSectores().subscribe({
      next:(data)=>{this.service.sectores=data},
      error:(e)=>{console.log(e)}})
  }
  verCeldas(x:any){
    this.direccion= "c/"+`${x}`
    console.log(this.direccion)
    
  }
  

}
