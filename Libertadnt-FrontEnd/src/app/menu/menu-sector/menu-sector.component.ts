import { Component, OnInit } from '@angular/core';
import { SectorService } from '../../sector/sector.service.js';
import { RouterLink , ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-menu-sector',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menu-sector.component.html',
  styleUrl: './menu-sector.component.css'
})
export class MenuSectorComponent implements OnInit{
  constructor (public service : SectorService, private router:Router, private route:ActivatedRoute){}
  direccion:string | undefined
  ngOnInit(): void {
    this.service.getSectores().subscribe({
      next:(data)=>{
        console.log("sectores obtenidos")
        this.service.sectores=data},
      error:(e)=>{console.log(e)}})
  }
  verCeldas(x:any){
  this.router.navigate([`${x}`], { relativeTo: this.route });
  }
  verTurnos(x:any){
  this.router.navigate([`${x}`], { relativeTo: this.route });
  }
  
  

}