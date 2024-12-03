import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SentenciasService {
  readonly api_url="https://jsonplaceholder.typicode.com/users/"
  sentencias:any 
  messageService: any;
  sentencia: any
  constructor(
  private http: HttpClient) {this.sentencias =  [],
    this.sentencia = {
      cod_sentencia :0, 
      nombre :'', 
      descripcion: '', 
      duracion_anios:'',  
      duracion_meses : '',
      duracion_dias: '',  
      orden_de_gravedad:''
    }}  
  private log(message: string) {
  this.messageService.add(`GuaridaService: ${message}`);
}

getSentencias() {
  return this.http.get<any | JSON>("http://localhost:8080/sentencias")
  
}
getOneSentencias(id:any) {
  return this.http.get<any | JSON>(this.api_url+id)
}
postSentencias(sActual:any){
  return this.http.post<any| JSON>(this.api_url,sActual)
}

}
