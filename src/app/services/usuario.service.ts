import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IUsuario } from '../interfaces/IUsuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private API = environment.API;
  private LOCAL = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  public usuarioPorEmail(email: string) {
    return this.http.get(`${this.API}usuario?email=${email}`);
  }

  public buscarPorId(id: string) {
    return this.http.get<IUsuario>(`${this.LOCAL}usuario/${id}`);
  }
}
