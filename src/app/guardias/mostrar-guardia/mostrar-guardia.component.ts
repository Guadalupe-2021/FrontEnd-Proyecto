import { Component, OnInit } from '@angular/core';
import { GuardiasService } from '../guardias.service.js';

@Component({
  selector: 'app-mostrar-guardia',
  standalone: true,
  imports: [],
  templateUrl: './mostrar-guardia.component.html',
  styleUrl: './mostrar-guardia.component.css'
})
export class MostrarGuardiaComponent implements OnInit {
  guardias :any =[];
  constructor (public service : GuardiasService){};

  ngOnInit(): void {
    this.traerGuardias()
  }
  traerGuardias(){
    this.service.getGuardias().subscribe({
      next: (data)=> {
        if(data.status == 201 || data.status == undefined){
          console.log("guardias cargados", data)
          this.service.guardias = data}
      },
      error: (e) => {
        if(e.status === 404){
          console.log("guardias no existentes ",e)
        }
      }
      });
    console.log(this.service.guardias);
  }

}
