import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms'; 
import { RouterLink, Router, ActivatedRoute} from '@angular/router';
import { LogInService } from './log-in.service.js';
import { ToastrService } from 'ngx-toastr';
import { RecaptchaModule } from "ng-recaptcha";


@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,RouterLink,RecaptchaModule],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent{ 
    form_logIn: FormGroup;
    message = '';
    noEncontrado: boolean | undefined;
    captchaToken = '';

constructor (private _logIn_service : LogInService , private router:Router,
  private formb:FormBuilder, private route: ActivatedRoute, private toastr:ToastrService){

  this.form_logIn = this.formb.group({
    cod_administrador:["",Validators.required],
    contrasenia:["",Validators.required],
 })
}

validarUsuarios(){
  this.noEncontrado = false
  this._logIn_service.postAdministradorLogIn(this.form_logIn.value).subscribe({
    next: (data)=> {
      console.log(data)
      if(data.status == 202){
        console.log(data)
        localStorage.setItem('jwtToken', data.token as string);
        console.log(data.data)
        this.irAlMenu()
      }
    },
    error: (e)=> {
      this.noEncontrado = true
      if(e.status==404){
        this.toastr.error('Usuario no Encontrado')
      }
      if(e.status == 401){
        this.toastr.error('Contraseña Invalida')
      }
    }
  });

}

irAlMenu():void{
   if (!this.noEncontrado) {this.router.navigate(['../menu'], { relativeTo: this.route });}
}

  onCaptchaResolved(token: any): void {
    console.log('Captcha token:', token);
    this.captchaToken = token;
  }


}
