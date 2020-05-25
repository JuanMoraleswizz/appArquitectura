import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Cliente} from '../models/cliente';
import {CONSTANTES} from '../path/services';

@Injectable({
  providedIn: 'root'
})
export class ListaSociosService {

  constructor(private http: HttpClient) { }

  public cargarDatos(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(CONSTANTES.cliente);
  }
}
