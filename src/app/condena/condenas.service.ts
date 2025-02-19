import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICondena, IServerResponse } from '../shared/entity.interfaces.js';

@Injectable({
  providedIn: 'root'
})
export class CondenasService {

  constructor(private http:HttpClient) {}

  putCondena(cod_condena:number|undefined,condena:ICondena){
    return this.http.put<IServerResponse>("http://localhost:8080/condenas/"+`${cod_condena}`,condena)
  }
}
