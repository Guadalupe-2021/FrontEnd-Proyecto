import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './usuario.service.js';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent implements OnInit{
  constructor(public service: UsuarioService){}
  ngOnInit(): void {
    this.service.getUsuario().subscribe({
      next:(data)=>{
        if(data.status === 201){
          console.log("administradores encontrados ")
          this.service.usuarios=data
          console.log(data)
          this.bandera=true
        }},
      error:(e)=>{
        if(e.status=== 404){
          console.log("administradores no encontrados")
          this.bandera= false
        }
        }})
    console.log(this.service.usuarios)
  }
  bandera:boolean|undefined

}
