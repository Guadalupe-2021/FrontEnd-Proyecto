import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IServerResponse, ITurno } from '../shared/entity.interfaces.js';

@Injectable({
  providedIn: 'root'
})
export class TurnosService {

  constructor(private http:HttpClient) { }
  getAllTurnos():Observable<ITurno[]>{
    return this.http.get<ITurno[]>("http://localhost:8080/turnos")
  }
  getAllTurnosBySectorAndDate(cod_sector:string,fecha:string):Observable<ITurno[]>{
    return this.http.get<ITurno[]>("http://localhost:8080/turnos/"+`${cod_sector}/`+`${fecha}`)
  }
  postTurno(turno:ITurno):Observable<ITurno>{
    return this.http.post<ITurno>("http://localhost:8080/turnos",turno)
  }
deleteTurno(cod_turno:string)
:Observable<IServerResponse> {
  return this.http.delete<IServerResponse> (
    "http://localhost:8080/turnos/"+`${cod_turno}`) }
deleteTurnos(fecha:string,tipo_turno:string,cod_sector:string,cod_guardia:number)
:Observable<IServerResponse> { return this.http.delete<IServerResponse> (
    "http://localhost:8080/turnos/"+`${fecha}/`+`${tipo_turno}/`+`${cod_sector}/`+`${cod_guardia}`)
}
}
