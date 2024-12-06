import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SectorService {

  // readonly api_url ='https://jsonplaceholder.typicode.com/posts'
  // readonly celda_url ='https://jsonplaceholder.typicode.com/users/'
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
getTurnosDeSector(cod_sector:any) {
  return this.http.get<any | JSON>("http://localhost:8080/sectores/" + `${cod_sector}` + "/turnos/")
}
deleteOneTurno(cod_sector:any) {
  return this.http.delete<any | JSON>("http://localhost:8080/turnos/"+`${cod_sector}`)
}
postTurno(uActual:any){
  return this.http.post<any| JSON>("http://localhost:8080/turnos",uActual)
}
putBajaTurno(cod_guardia:any,cod_sector:any,turno:any){
  let respuesta={
    cod_guardia: cod_guardia,
    cod_sector: cod_sector,
    turno: turno}
  console.log(respuesta)
  return this.http.put<any | JSON>("http://localhost:8080/turnos",respuesta)
}



}
