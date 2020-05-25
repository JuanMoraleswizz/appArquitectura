import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Cliente} from '../models/cliente';
import {Observable} from 'rxjs';
import {CONSTANTES} from '../path/services';

@Injectable({
  providedIn: 'root'
})
export class RegistroSocioService {

  constructor(private http: HttpClient) { }

  public save(cliente: Cliente): Observable<Cliente>{
      return this.http.post<Cliente>(CONSTANTES.cliente, cliente);
  }
}
