import { Component, OnInit } from '@angular/core';
import { SectorService } from '../../sector/sector.service.js';
import { RouterLink , ActivatedRoute, Router} from '@angular/router';
import { BotonAtrasComponent } from '../../boton-atras/boton-atras.component.js';

@Component({
  selector: 'app-menu-sector',
  standalone: true,
  imports: [RouterLink,BotonAtrasComponent],
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
  verDetalleSector(cod_sector:any){
  this.router.navigate([`${cod_sector}` + "/detalle-sector"], { relativeTo: this.route });

}
}
