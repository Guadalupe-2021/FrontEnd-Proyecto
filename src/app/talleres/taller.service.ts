import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TallerService {
  readonly api_url="https://jsonplaceholder.typicode.com/todos/"
 
  taller: any
  talleres:any 
  messageService: any;
  constructor(private http: HttpClient) {this.talleres =  [],
    this.taller={
      nombre: "",
      descripcion: "", 
      locacion: "", 
      diaDeLaSemana: 0, 
      horaInicio: 0, 
      horaFin: 0,
      estado: 0
    }
   }  
  private log(message: string) {
  this.messageService.add(`GuaridaService: ${message}`);
}

getTalleres() {
  return this.http.get<any | JSON>("http://localhost:8080/talleres")
}
validarTaller(tAtual:any){
  this.getTalleres().subscribe({
    next:(data)=>{this.talleres=data},
    error:(e)=>{console.log(e)}})
  console.log(this.talleres)
  let encontrado = this.talleres.find((element:any) => element==tAtual );
  if(encontrado !== undefined){
    return true;
  }
  return false
}
postTaller(x:any){
  return this.http.post<any|JSON>("http://localhost:8080/talleres",x);
}
getOneTaller(id:number) {
  return this.http.get<any | JSON>("http://localhost:8080/talleres/"+`${id}`);
}
postIncripcionTaller(cod_recluso:any,cod_taller:any){
  let respuesta={cod_recluso:cod_recluso,cod_taller:cod_taller}
return this.http.post<any | JSON>("http://localhost:8080/talleres/inscripcion/"+`${cod_taller}`+"&"+`${cod_recluso}`,respuesta)
}
putTaller(taller:any){
return this.http.put<any| JSON>("http://localhost:8080/talleres/"+`${taller.cod_taller}`,taller)
}
  
}
