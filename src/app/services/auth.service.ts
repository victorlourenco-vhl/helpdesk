import { Injectable } from '@angular/core';
import { Login } from '../models/login';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: string = environment.baseUrl

  constructor(private httpClient: HttpClient) { }

  autenticao(login: Login): Observable<any> {
    return this.httpClient.post(`${this.url}/auth/login`, login)
  }
}
