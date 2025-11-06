import { Component, OnInit } from '@angular/core';
import { GuardiasService } from '../guardias.service';
import { IGuardia } from '../../shared/entity.interfaces.js';
import { DatePipe, NgFor, NgIf } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { ModificarGuardiaComponent } from '../modificar-guardia/modificar-guardia.component';



@Component({
  selector: 'app-mostrar-guardia',
  standalone: true,
  imports: [NgFor,NgIf,DatePipe,ModificarGuardiaComponent],
  templateUrl: './mostrar-guardia.component.html',
  styleUrl: './mostrar-guardia.component.css'
})
export class MostrarGuardiaComponent implements OnInit {
  guardias!:IGuardia[];

  constructor (
    public _service_guardia : GuardiasService, private toastr:ToastrService){};
  ngOnInit(): void {
    this.traerGuardias()
  }
  traerGuardias(){
    this._service_guardia.getAll().subscribe({
      next: (data)=> {
        this.guardias = data
        }
      ,error: (e) => {
        if(e.status === 404)this.toastr.error("Guardias NO Encontrados ")
        if(e.status === 500)this.toastr.error("Guardias NO Existentes ")
      }
      });
  }
}
