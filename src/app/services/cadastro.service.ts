import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ICadastro } from '../interfaces/ICadastro';

@Injectable({
  providedIn: 'root',
})
export class CadastroService {
  constructor(private http: HttpClient) {}

  private API = environment.API;

  public cadastro(usuario: ICadastro) {
    return this.http.post<ICadastro>(`${this.API}usuario/cadastro`, usuario);
  }
}
