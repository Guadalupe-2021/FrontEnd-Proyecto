import { Component, OnInit } from '@angular/core';
import { ReclusosService } from '../reclusos.service.js';
import { ActivatedRoute } from '@angular/router';
import { IRecluso } from '../../shared/entity.interfaces.js';
import { ModificarReclusoComponent } from '../modificar-recluso/modificar-recluso.component.js';
import { NgFor, NgIf } from '@angular/common';
import { FormularioCondenaComponent } from '../../condena/formulario-condena/formulario-condena.component.js';
import { ModificarCondenaComponent } from '../../condena/modificar-condena/modificar-condena.component.js';

@Component({
  selector: 'app-detalle-recluso',
  standalone: true,
  imports: [ModificarReclusoComponent,NgIf,NgFor,ModificarCondenaComponent],
  templateUrl: './detalle-recluso.component.html',
  styleUrl: './detalle-recluso.component.css'
})
export class DetalleReclusoComponent implements OnInit{
  cod_recluso!:string
  recluso!:IRecluso
  recluso_encontrado=false

constructor(private _service_recluso : ReclusosService, private route:ActivatedRoute){
  this.cod_recluso = this.route.snapshot.params['cod_recluso']
}

ngOnInit(){
  this._service_recluso.getOneRecluso(this.cod_recluso).subscribe({
    next: (data)=>{
      console.log("recluso encontrado")
      this.recluso = data
      console.log("condenas", this.recluso.condenas)
      this.recluso_encontrado=true
    },
    error: (e)=>{
      console.log("recluso no encontrado")
    }
  })


}


}
