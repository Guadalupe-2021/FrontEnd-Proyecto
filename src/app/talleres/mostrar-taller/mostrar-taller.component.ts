import { Component, OnInit } from '@angular/core';
import { TallerService } from '../taller.service';


@Component({
  selector: 'app-mostrar-taller',
  standalone: true,
  imports: [],
  templateUrl: './mostrar-taller.component.html',
  styleUrl: './mostrar-taller.component.css'
})
export class MostrarTallerComponent implements OnInit{
  constructor (public service : TallerService){}
  ngOnInit(): void {
    this.service.getTalleres().subscribe({
      next:(data)=>{
        if(data.status == 201){
          console.log("talleres rescatados", data.status)
          this.service.talleres=data
          console.log(this.service.talleres)
        }
      },
      error:(e)=>{
        console.log("talleres no rescatados", e.status)
      }})
  }


}
