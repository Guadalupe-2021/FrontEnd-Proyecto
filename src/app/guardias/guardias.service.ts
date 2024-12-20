import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IGuardia, IServerResponse } from '../shared/entity.interfaces.js';

@Injectable({
  providedIn: 'root'
})
export class GuardiasService {
  readonly api_url="https://jsonplaceholder.typicode.com/todos/"
  guardia!: IGuardia
  guardias:any 
  messageService: any;
  constructor(private http: HttpClient) {}  
  private log(message: string) {
  this.messageService.add(`GuaridaService: ${message}`);
}
response:any

setGuardia(gard:IGuardia){
  this.guardia = gard
}
getGuardia(){
  return this.guardia
}

getAll():Observable<IGuardia[]> {
  return this.http.get<IGuardia[]>("http://localhost:8080/guardias/")
}
getOne(id:string):Observable<IGuardia> {
  return this.http.get<IGuardia>("http://localhost:8080/guardias/"+`${id}`)
}

putGuardia(id:number|undefined,guardia:IGuardia):Observable<IServerResponse>{
  return this.http.put<IServerResponse>("http://localhost:8080/guardias/"+ `${id}` + "/modificar",guardia);
}

postGuardia(guardia:IGuardia):Observable<IServerResponse>{
  return this.http.post<IServerResponse>("http://localhost:8080/guardias/",guardia);
}

putFinalizarGuardia(x:any){
  return this.http.put<any | JSON>("http://localhost:8080/guardias/finalizarContrato",x);
}

}




const today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1;
let year = today.getFullYear();
let finalDate = `${year}-${month}-${day}`