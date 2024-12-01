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
ruta_tipo_usuario:any

setRutaTipoUsuario(tipoUsuario:string){
  this.ruta_tipo_usuario = tipoUsuario
}
getRutaTipoUsuario(){
  return this.ruta_tipo_usuario
}

constructor(private http: HttpClient) {
  this.usuarios = [],
  this.usuario={ cod_administrador: 0,  contrasenia: ""}
 }  
private log(message: string) {
  this.messageService.add(`GuaridaService: ${message}`);
}
getUsuario() {
  return this.http.get<any | JSON>("http://localhost:8080/administradores")
  
}
getOneUsuario(id:any) {
  return this.http.get<any | JSON>("http://localhost:8080/administradores/"+`${id}`)
}
postAdministrador(uActual:any){
  return this.http.post<any| JSON>("http://localhost:8080/administradores/logIn", uActual)
}

}




