import { Component, OnInit } from '@angular/core';
import { SectorService } from '../../sector/sector.service';
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
        console.log("sectores obtenidos",data)
        this.service.sectores=data
      },
      error:(e)=>{console.log(e)}})
  }
  verDetalleSector(cod_sector:any){
  this.router.navigate([`${cod_sector}` + "/detalle-sector"], { relativeTo: this.route });

}
}
