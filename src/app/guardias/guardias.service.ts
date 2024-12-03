import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GuardiasService {
  readonly api_url="https://jsonplaceholder.typicode.com/todos/"
  guardia: any
  guardias:any 
  messageService: any;
  constructor(private http: HttpClient) {this.guardias =  [],
    this.guardia={
    nombre: "",
    apellido: "", 
    dni: 0, 
    fechaIniContrato: "0"}
   }  
  private log(message: string) {
  this.messageService.add(`GuaridaService: ${message}`);
}

getGuardias() {
  return this.http.get<any | JSON>("http://localhost:8080/guardias")
}
postGuardia(x:any){
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  let year = today.getFullYear();
  let finalDate = `${year}-${month}-${day}`
  this.guardia.fechaIniContrato = finalDate
  return this.http.post<any|JSON>("http://localhost:8080/guardias",x);
}
putFinalizarGuardia(x:any){
  return this.http.put<any | JSON>("http://localhost:8080/guardias/finalizarContrato",x);
}
getOneGuardias(id:number) {
  return this.http.get<any | JSON>("http://localhost:8080/guardias/"+`${id}`);
}
}




const today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1;
let year = today.getFullYear();
let finalDate = `${year}-${month}-${day}`