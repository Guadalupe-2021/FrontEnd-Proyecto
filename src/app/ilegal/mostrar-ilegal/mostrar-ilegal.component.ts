import { Component, OnInit } from '@angular/core';
import { ActividadService } from '../../actividades/actividad.service.js';

@Component({
  selector: 'app-mostrar-ilegal',
  standalone: true,
  imports: [],
  templateUrl: './mostrar-ilegal.component.html',
  styleUrl: './mostrar-ilegal.component.css'
})
export class MostrarIlegalComponent implements OnInit{
  constructor(public service: ActividadService){}
  ngOnInit(): void {
    this.service.getIlegales().subscribe({
      next:(data)=>{this.service.ilegales=data},
      error:(e)=>{console.log(e)}})
  }
  
}
