import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRecluso, IServerResponse, ICondena } from '../shared/entity.interfaces.js';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReclusosService {

  readonly api_recluso="https://jsonplaceholder.typicode.com/todos/"
  readonly api_condena="https://jsonplaceholder.typicode.com/todos/"
  readonly api_celda="https://jsonplaceholder.typicode.com/todos/"

constructor(private http: HttpClient) {}  

getAllReclusos():Observable<IRecluso[]>{
  return this.http.get<IRecluso[]>("http://localhost:8080/reclusos")
}
getOneRecluso(id:string) {
  return this.http.get<any | JSON>("http://localhost:8080/reclusos/"+`${id}`);
}


postReclusoYCondenas(reclusoData:IRecluso,condenasData:ICondena[]):Observable<IServerResponse>{
  const body = {reclusoData,condenasData}
 return this.http.post<IServerResponse>("http://localhost:8080/reclusos/",body);
}

modificarRecluso(id:number|undefined, recluso:IRecluso):Observable<IServerResponse>{
  return this.http.put<IServerResponse>("http://localhost:8080/reclusos/"+ `${id}`,recluso)
}




getOneCelda(id:number) {
  return this.http.get<any | JSON>(this.api_celda+`${id}`);

}
getCelda() {
  return this.http.get<any[] | JSON>(this.api_celda)
}
getLiberarRecluso(){
  return this.http.get<any | JSON>("http://localhost:8080/reclusos/finalizarCondena")
}


}
