import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

readonly api_url ='https://jsonplaceholder.typicode.com/todos/'
//readonly api_url ='tuma/usuarios/id'
messageService: any;
usuario:any
usuarios:any
usuarioEspecial:any
tipo_usuario:string|undefined



constructor(private http: HttpClient) {
  this.usuarios = [],
  this.usuario={ cod_administrador: 0,  contrasenia: ""}
 }  
private log(message: string) {
  this.messageService.add(`GuaridaService: ${message}`);
}
getTipoUsuario(){
  return this.tipo_usuario
}
setTipoUsuario(tipo:string){
  this.tipo_usuario=tipo
}
getUsuarios() {
  return this.http.get<any | JSON>("http://localhost:8080/administradores")
}
getOneUsuario(id:any) {
  return this.http.get<any | JSON>("http://localhost:8080/administradores/"+`${id}`)
}
postAdministradorLogIn(usuarioLogIn:{cod_administrador:number, contrasenia:string}){
  return this.http.post<any| JSON>("http://localhost:8080/administradores/logIn", usuarioLogIn)
}

}




