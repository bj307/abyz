import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private LOCAL = environment.LOCAL;

  constructor(private http: HttpClient) {}

  public usuarioPorEmail(email: string) {
    return this.http.get(`${this.LOCAL}usuario?email=${email}`);
  }
}
