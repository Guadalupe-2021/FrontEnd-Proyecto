import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SectorService {

  readonly api_url ='https://jsonplaceholder.typicode.com/posts'
  readonly celda_url ='https://jsonplaceholder.typicode.com/users/'
messageService: any;
sectores:any
sector:any
celdas:any
celda:any
constructor(
private http: HttpClient) {
  this.sector={nombre:String,cod_sector:Number,descipcion:String}
  this.sectores= []
  this.celda={capacidad:Number,cod_celda:Number,descipcion:String}
  this.celdas= []
 }  
private log(message: string) {
  this.messageService.add(`GuaridaService: ${message}`);
}
getSectores() {
  return this.http.get<any | JSON>(this.api_url)
  
}
getOneSector(id:any) {
  return this.http.get<any | JSON>(this.api_url+`${id}`)
}
postSector(uActual:any){
  return this.http.post<any| JSON>(this.api_url,uActual)
}
getCeldasDSeSector(id:any) {
  return this.http.get<any | JSON>(this.celda_url+`${id}`)
  
}
getOneCeldaDeSector(idSector:any,idCelda:any) {
  return this.http.get<any | JSON>(this.celda_url+`${idSector}`+`${idCelda}`)
}


}
