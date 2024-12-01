import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms'; 
import { RouterOutlet ,RouterLink, Router} from '@angular/router';
import { UsuarioService } from './usuario.service.js';


@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,RouterLink],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent implements OnChanges { 
    usuario: FormGroup;
    cod_administrador:FormControl;
    contrasenia: FormControl;
    
  bander = false;

constructor (private service : UsuarioService , private router:Router){
      this.contrasenia= new FormControl('',[Validators.required])
      this.cod_administrador= new FormControl('',[Validators.required])
      console.log(this.cod_administrador)
      this.usuario = new FormGroup({
  
        cod_administrador: this.cod_administrador,
        contrasenia: this.contrasenia,
        
        })
}ngOnChanges(changes: SimpleChanges): void {
    if(this.cod_administrador.value !== ''){
      console.log(this.cod_administrador)
    }
  }

bandUsuario: string | undefined
bandera = ''
validarUsuarios(){
  this.enviarUsuario()
 console.log(this.bandUsuario)
 console.log(this.bandera)
}
enviarUsuario(){
  this.service.postAdministrador(this.usuario.value).subscribe({
    next: (response)=> {
      console.log(response)
      if(response.status == 201){
        this.bandUsuario='encontrado';
        this.bandera='menu'
        console.log("usuario normal ")
        this.router.navigateByUrl('/menu')
      }
      if(response.status == 202){
        this.bandUsuario ='encontrado'
        this.bandera = "menu-maestro"
        this.service.setRutaTipoUsuario("menu-maestro")
        console.log(this.service.getRutaTipoUsuario())
        console.log("usuario especial")
        this.router.navigateByUrl('/menu-maestro')
      }
    },
    error: (e)=> {
      console.log("usuario no valido ")
      console.log(e)
      if(e.status==404){
        this.bandUsuario='no encontrado';
      }
      if(e.status == 401){
        this.bandUsuario='incorrecto'
      }
    }
  });

}




}
