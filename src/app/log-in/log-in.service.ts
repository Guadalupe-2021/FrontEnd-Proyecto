import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IServerResponse } from '../shared/entity.interfaces.js';

@Injectable({
  providedIn: 'root'
})
export class LogInService {

constructor(private http: HttpClient) {}  

getUsuarios(){
  return this.http.get<any | JSON>("http://localhost:8080/administradores")
}
getOneUsuario(id:any) {
  return this.http.get<any | JSON>("http://localhost:8080/administradores/"+`${id}`)
}
postAdministradorLogIn(usuarioLogIn:{cod_administrador:number, contrasenia:string}){
  return this.http.post<IServerResponse>("http://localhost:8080/administradores/logIn", usuarioLogIn)
}

}
