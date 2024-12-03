import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReclusosService {

 readonly api_recluso="https://jsonplaceholder.typicode.com/todos/"
  readonly api_condena="https://jsonplaceholder.typicode.com/todos/"
  readonly api_celda="https://jsonplaceholder.typicode.com/todos/"
  condenas:any
  condena:any
  recluso: any
  reclusos:any 
  messageService: any;
  celda:any;
  celdas:any;
  constructor(private http: HttpClient) {this.reclusos =  [],
    this.recluso={
      nombre:'',
      apellido:'',
      dni:'', 
      fecha_nac:''},
    this.condena={ fecha_ini:'', fecha_fin_estimada:'',fecha_fin_real :'',celda:this.celda},
    this.condenas = []
    this.celda= {}
    this.celdas= []
  }  


getReclusos() {
  return this.http.get<any | JSON>("http://localhost:8080/reclusos")
}
postRecluso(x:any){
  return this.http.post<any|JSON>("http://localhost:8080/reclusos/",x);
}
getOneRecluso(id:number) {
  return this.http.get<any | JSON>("http://localhost:8080/reclusos/"+`${id}`);
}
getOneCondena(id:number) {
  return this.http.get<any | JSON>(this.api_condena+`${id}`);
}
getCondena() {
  return this.http.get<any[] | JSON>("http://localhost:8080/condenas")
}
postCondena(x:any|JSON){
  return this.http.post<any|JSON>("http://localhost:8080/condenas",x);
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
