import { Component} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms'; 
import { RouterLink, Router, ActivatedRoute} from '@angular/router';
import { UsuarioService } from '../usuarios/usuario.service.js';


@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,RouterLink],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent { 
    usuario: FormGroup;
    cod_administrador:FormControl;
    contrasenia: FormControl;
    tipo_usuario:string | undefined;
    message = '';
    noEncontrado: boolean | undefined;
constructor (private service : UsuarioService , private router:Router, private route: ActivatedRoute){
      this.contrasenia= new FormControl('',[Validators.required])
      this.cod_administrador= new FormControl('',[Validators.required])

      this.usuario = new FormGroup({
        cod_administrador: this.cod_administrador,
        contrasenia: this.contrasenia,       
        })

}

validarUsuarios(){
  this.noEncontrado = false

  this.service.postAdministradorLogIn(this.usuario.value).subscribe({
    next: (response)=> {
      console.log(response)
      if(response.status == 202){
        this.tipo_usuario = response.tipo_usuario
        this.service.setTipoUsuario(this.tipo_usuario as string)
        this.irAlMenu()
      }
    },
    error: (e)=> {
      this.noEncontrado = true
      if(e.status==404){
        this.message='Usuario Inexistente';
      }
      if(e.status == 401){
        this.message='Contraseña Incorrecta'
      }
    }
  });

}

irAlMenu():void{
   if (!this.noEncontrado) {this.router.navigate(['../menu'], { relativeTo: this.route });}
}



}
