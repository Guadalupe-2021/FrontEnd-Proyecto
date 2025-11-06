import { Component } from '@angular/core';
import { ModificarReclusoComponent } from '../modificar-recluso/modificar-recluso.component';
import { NgFor } from '@angular/common';
import { IRecluso } from '../../shared/entity.interfaces';
import { ReclusosService } from '../reclusos.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-mostrar-reclusos',
  standalone: true,
  imports: [ModificarReclusoComponent,NgFor],
  templateUrl: './mostrar-reclusos.component.html',
  styleUrl: './mostrar-reclusos.component.css'
})
export class MostrarReclusosComponent {
  reclusos!:IRecluso[]
    constructor (
      public _service_recluso : ReclusosService, private toastr:ToastrService){};
    ngOnInit(): void {
      this.traerreclusos()
    }
    traerreclusos(){
      this._service_recluso.getAllReclusos().subscribe({
        next: (data)=> {
          this.reclusos = data
          }
        ,error: (e) => {
          if(e.status === 404)this.toastr.error("Reclusos NO Encontrados ")
          if(e.status === 500)this.toastr.error("Reclusos NO Existentes ")
        }
        });
    }

}
