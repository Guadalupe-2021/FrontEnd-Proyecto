import { Component, OnInit } from '@angular/core';
import { RouterOutlet ,RouterLink, ActivatedRoute} from '@angular/router';
import { BotonAtrasComponent } from '../boton-atras/boton-atras.component.js';
import { UsuarioService } from '../usuarios/usuario.service.js';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterOutlet ,RouterLink,BotonAtrasComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  usuario_administrador:boolean|undefined
  tipo_usuario:string|undefined
  constructor(private _servicioUsuario:UsuarioService){}
ngOnInit():void{
  this.tipo_usuario = this._servicioUsuario.getTipoUsuario()
}

}
