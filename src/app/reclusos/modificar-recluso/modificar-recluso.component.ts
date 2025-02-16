import { Component, Input, OnInit } from '@angular/core';
import { IRecluso } from '../../shared/entity.interfaces.js';
import { ToastrService } from 'ngx-toastr';
import { ReclusosService } from '../reclusos.service.js';
import { FormularioReclusoComponent } from '../formulario-recluso/formulario-recluso.component.js';

@Component({
  selector: 'app-modificar-recluso',
  standalone: true,
  imports: [FormularioReclusoComponent],
  templateUrl: './modificar-recluso.component.html',
  styleUrl: './modificar-recluso.component.css'
})
export class ModificarReclusoComponent implements OnInit {
@Input() recluso!:IRecluso


constructor(private _service_recluso:ReclusosService, private toastr:ToastrService){

}
ngOnInit(){
console.log("inicializado de modificar recluso")
}


modificarRecluso(recluso_editado:IRecluso){
  console.log(recluso_editado)
  this._service_recluso.modificarRecluso(this.recluso.cod_recluso,recluso_editado).subscribe({
    next: (data)=>{
        console.log(data)
        this.toastr.success(data.message)
    },
    error: (e)=>{
      console.log(e)
      this.toastr.error(e.message)

    }
  })
}

}
