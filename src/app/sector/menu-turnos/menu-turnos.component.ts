import { Component } from '@angular/core';
import { SectorService } from '../sector.service';
import { ActivatedRoute, RouterLink } from '@angular/router';


@Component({
  selector: 'app-menu-turnos',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menu-turnos.component.html',
  styleUrl: './menu-turnos.component.css'
})
export class MenuTurnosComponent {
  constructor (public service : SectorService,public route: ActivatedRoute){
    let codi_sector = route.snapshot.params['sector'];
    console.log(route)
    service.sector.cod_sector=codi_sector
    }
  finalizar:string|undefined
  crear:string|undefined
  bandera:boolean|undefined

  ngOnInit(): void {
    console.log(this.route.snapshot.params['sector'])
    this.crear="crear-turnos"
    this.finalizar="finalizar-turnos"
    this.service.getTurnosDSeSector(this.route.snapshot.params['sector']).subscribe({
      next:(data)=>{
        console.log("turnos obtenidos ")
        this.service.celdas=data;
        console.log("devolucion: ",data.data)
      },
      error:(e)=>{
        console.log("turnos no obtenidos",e)
      }})
  }
  
}
