import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ILogin } from '../interfaces/ILogin';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  private API = environment.API;

  public login(usuario: ILogin) {
    return this.http.post(`${this.API}usuario/login`, usuario);
  }
}
