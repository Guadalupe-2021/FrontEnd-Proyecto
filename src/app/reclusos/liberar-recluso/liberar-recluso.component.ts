import { Component, OnInit } from '@angular/core';
import { ReclusosService } from '../reclusos.service.js';

@Component({
  selector: 'app-liberar-recluso',
  standalone: true,
  imports: [],
  templateUrl: './liberar-recluso.component.html',
  styleUrl: './liberar-recluso.component.css'
})
export class LiberarReclusoComponent  implements OnInit{
  constructor(public sRecluso : ReclusosService){}
  bandera:boolean | undefined
  ngOnInit(): void {
    
    this.sRecluso.getLiberarRecluso().subscribe({
      next:(data)=>{
        if(data.status === 201){
          this.sRecluso.reclusos=data
          console.log("los reclusos fueron obtenidos")
          this.bandera= true
        }
      },
      error:(e)=>{
        if(e.status=== 404){
          console.log("los recluos no pudieorn ser obtenidios")
          this.bandera=false
        }
      }
    })
  }

}
