import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISector, IServerResponse, ITurno } from '../shared/entity.interfaces.js';

@Injectable({
  providedIn: 'root'
})
export class SectorService {

messageService: any;
sectores:any
sector:any
celdas:any
celda:any
server_response:any
constructor(private http: HttpClient) {
  this.sector={nombre:String,cod_sector:Number,descipcion:String}
  this.sectores= []
  this.celda={capacidad:Number,cod_celda:Number,descipcion:String}
  this.celdas= []

 }  
private log(message: string) {
  this.messageService.add(`GuaridaService: ${message}`);
}
getSectores() {
  return this.http.get<any | JSON>("http://localhost:8080/sectores")
}
getOneSector(id:any) {
  return this.http.get<any | JSON>("http://localhost:8080/sectores/"+`${id}`)
}
postSector(uActual:any){
  return this.http.post<any| JSON>("http://localhost:8080/sectores",uActual)
}

// CELDAS
getCeldasDSeSector(id:any) {
  return this.http.get<any | JSON>("http://localhost:8080/sectores/" + `${id}` + "/celdas/")
}


// TURNOS
getAllSectoresConTurnosPorFecha(fecha_turnos:string = (new Date()).toISOString().split("T")[0])
:Observable<ISector[]> {
  console.log("Fecha Turnos: ", fecha_turnos)
  return this.http.get<ISector[]>("http://localhost:8080/sectores/" + `${fecha_turnos}/`)
}
  getAllTurnosBySectorAndDate(fecha:string = new Date().toISOString()):Observable<ITurno[]>{
    return this.http.get<ITurno[]>("http://localhost:8080/turnos/"+`cod_sector/`+`fecha`)
  }


// asistencia del guardia para el turno

postTurno(turno:ITurno):Observable<IServerResponse>{
  return this.http.post<IServerResponse>("http://localhost:8080/turnos",turno)
}



}
