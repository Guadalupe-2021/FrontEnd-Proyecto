import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IActividad, IServerResponse } from '../shared/entity.interfaces.js';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActividadService {

readonly api_url ='https://jsonplaceholder.typicode.com/todos/'
readonly ilegal_url = 'https://jsonplaceholder.typicode.com/todos/'

constructor(private http: HttpClient) {}


getActividades():Observable<IActividad[]> {
  return this.http.get<IActividad[]>("http://localhost:8080/actividades")
}

getOneActividad(id:number):Observable<IActividad> {
  return this.http.get<IActividad>("http://localhost:8080/actividades/"+`${id}`)
}

postActividad(nueva_actividad:IActividad){
  return this.http.post<IServerResponse>("http://localhost:8080/actividades",nueva_actividad)
}

putActividad(id:number,actividad_modificada:IActividad){
  return this.http.put<IServerResponse>("http://localhost:8080/actividades/"+`${id}`,actividad_modificada)
}

deleteActividad(id:number):Observable<IServerResponse>{
  return this.http.delete<IServerResponse>("http://localhost:8080/actividades/"+`${id}`)
}

}
