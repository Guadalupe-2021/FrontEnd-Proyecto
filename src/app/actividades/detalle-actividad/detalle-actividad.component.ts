import { Component } from '@angular/core';
import { InscripcionActividadComponent } from '../inscripcion-actividad/inscripcion-actividad.component.js';
import { IActividad } from '../../shared/entity.interfaces.js';
import { ActividadService } from '../actividad.service.js';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-detalle-actividad',
  standalone: true,
  imports: [InscripcionActividadComponent],
  templateUrl: './detalle-actividad.component.html',
  styleUrl: './detalle-actividad.component.css'
})
export class DetalleActividadComponent {
  actividad!:IActividad
  
  constructor(private _service_actividad:ActividadService,private route:ActivatedRoute,
    private toastr:ToastrService
  ){
  this.route.params.subscribe(params => {
    const id = Number(params['id']); // Get the route parameter 'id'
    this._service_actividad.getOneActividad(id).subscribe({
      next:(data)=>{
        this.actividad = data
        console.log(data)
      }, error:(e)=>{
        this.toastr.error('Actividad No Encontrada')
      }
    })
});
  }




}
