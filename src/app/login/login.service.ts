import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserInfo} from '../models/user-info';
import {CONSTANTES} from '../path/services';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public autenticar(userInfo: UserInfo): Observable<any> {
    return this.http.post<any>(`${CONSTANTES.autenticar}`, userInfo);
  }
}
