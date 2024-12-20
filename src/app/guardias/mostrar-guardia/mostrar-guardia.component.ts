import { Component, OnInit } from '@angular/core';
import { GuardiasService } from '../guardias.service.js';
import { IGuardia } from '../../shared/entity.interfaces.js';
import { DatePipe, NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-mostrar-guardia',
  standalone: true,
  imports: [NgFor,NgIf,DatePipe],
  templateUrl: './mostrar-guardia.component.html',
  styleUrl: './mostrar-guardia.component.css'
})
export class MostrarGuardiaComponent implements OnInit {
  guardias!:IGuardia[];
  error_encontrado = false;
  message?:string

  constructor (
    public _service_guardia : GuardiasService,
    private router:Router,
    private route:ActivatedRoute,
    private toastr:ToastrService){};
  ngOnInit(): void {
    this.traerGuardias()
  }
  traerGuardias(){
    this._service_guardia.getAll().subscribe({
      next: (data)=> {
        this.guardias = data
        }
      ,error: (e) => {
        this.error_encontrado = true
        if(e.status === 404)this.message = "Guardias NO Encontrados "
        if(e.status === 500)this.message = "Guardias NO Existentes "
      }
      });
  }
editarGuardia(guardia:IGuardia){
  this._service_guardia.setGuardia(guardia) // Para usarlo en componente modificar-guardia
  this.router.navigate(["../"+`${guardia.cod_guardia}`+"/modificar"], {relativeTo: this.route}); 
}
finalizarContrato(guard:IGuardia){
if (guard.fecha_fin_contrato===null){
    guard.fecha_fin_contrato = new Date()
    this._service_guardia.putGuardia(guard.cod_guardia,guard).subscribe({
      next:(serverResponse)=>{
      this.toastr.success(serverResponse.message)
      console.log(serverResponse.data)
    },
    error: (e)=>{
      console.log(e)
      this.toastr.error(e.message)
    }
    })

  }else{this.toastr.error("ERROR: El Contrato ya se Encuentra Finalizado")}
}
}
