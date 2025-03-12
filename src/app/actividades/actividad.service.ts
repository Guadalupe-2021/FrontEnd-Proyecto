import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IActividad } from '../shared/entity.interfaces.js';

@Injectable({
  providedIn: 'root'
})
export class ActividadService {

readonly api_url ='https://jsonplaceholder.typicode.com/todos/'
readonly ilegal_url = 'https://jsonplaceholder.typicode.com/todos/'

constructor(private http: HttpClient) {}


getActividades() {
  return this.http.get<any | JSON>("http://localhost:8080/actividades")
}
getOneActividad(id:any) {
  return this.http.get<any | JSON>("http://localhost:8080/actividades/"+`${id}`)
}
postActividad(nueva_actividad:IActividad){
  return this.http.post<any| JSON>("http://localhost:8080/actividades",nueva_actividad)
}
putActividad(id:any,uActual:any){
  return this.http.put<any| JSON>("http://localhost:8080/actividades/"+`${id}`,uActual)
}
}
