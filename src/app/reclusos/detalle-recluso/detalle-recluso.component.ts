import { Component, OnInit } from '@angular/core';
import { ReclusosService } from '../reclusos.service';
import { ActivatedRoute } from '@angular/router';
import { IRecluso } from '../../shared/entity.interfaces.js';
import { ModificarReclusoComponent } from '../modificar-recluso/modificar-recluso.component';
import { NgFor, NgIf } from '@angular/common';
import { ModificarCondenaComponent } from '../../condena/modificar-condena/modificar-condena.component';
import { FormularioActividadComponent } from '../../actividades/formulario-actividad/formulario-actividad.component';

@Component({
  selector: 'app-detalle-recluso',
  standalone: true,
  imports: [ModificarReclusoComponent,NgIf,NgFor,ModificarCondenaComponent,FormularioActividadComponent],
  templateUrl: './detalle-recluso.component.html',
  styleUrl: './detalle-recluso.component.css'
})
export class DetalleReclusoComponent implements OnInit{
  cod_recluso!:string
  recluso!:IRecluso
  recluso_encontrado=false
  selected_value!:string

constructor(private _service_recluso : ReclusosService, private route:ActivatedRoute){
  this.cod_recluso = this.route.snapshot.params['cod_recluso']
}

ngOnInit(){
  this._service_recluso.getOneRecluso(this.cod_recluso).subscribe({
    next: (data)=>{
      console.log("recluso encontrado")
      this.recluso = data
      console.log(data)
      console.log("condenas", this.recluso.condenas)
      this.recluso_encontrado=true
      this.selected_value = "condenas"
    },
    error: (e)=>{
      console.log("recluso no encontrado")
    }
  })


}

setSelectValue(element:any){
  this.selected_value = element.target.value
  console.log(this.selected_value)
}

}
