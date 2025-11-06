import { TestBed } from '@angular/core/testing';

import { GuardiasService } from './guardias.service';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { IGuardia } from '../shared/entity.interfaces.js';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { firstValueFrom } from 'rxjs';

describe('GuardiasService', () => {
  let service: GuardiasService;
  //let http:HttpClient
  let mock_guardia:IGuardia
  let httpClientSpy: HttpClient
  function doDate(date:string){return new Date(date  + "T00:00:00")}
  mock_guardia =  {cod_guardia: 1,nombre: 'John',apellido: 'Deep',dni: 44332212,fecha_ini_contrato: doDate('2014-04-03'),fecha_fin_contrato: undefined}
  let id_test:string
  beforeEach(() => {
    let http:HttpClient
    TestBed.configureTestingModule({providers: [
      GuardiasService, provideHttpClient(),provideHttpClientTesting()]});
    service = TestBed.inject(GuardiasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
   it('service.getOne(id) shoud return an obserbable with an IGuardia object',async (done: DoneFn) => {
  const guardia_service$ = service.getOne('string');
  const httpTesting = TestBed.inject(HttpTestingController);
  const servicePromise = firstValueFrom(guardia_service$);
  mock_guardia =  {cod_guardia: 1,nombre: 'John',apellido: 'Deep',dni: 44332212,fecha_ini_contrato: doDate('2014-04-03'),fecha_fin_contrato: undefined}
  const req = httpTesting.expectOne('http://localhost:8080/guardias/', 'Request to get one Guardia');
  const id_test = 'id_string'
  expect(req.request.method).toBe('GET');
  req.flush(mock_guardia);
  expect(await servicePromise).toEqual(mock_guardia);
  httpTesting.verify();
  /*
     service.getOne(id_test).subscribe((value) => {
        expect(value).toBe(mock_guardia);
        done();
  });*/
})})
