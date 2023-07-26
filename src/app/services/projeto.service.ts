import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IProjeto } from '../interfaces/IProjeto';

@Injectable({
  providedIn: 'root',
})
export class ProjetoService {
  constructor(private http: HttpClient) {}

  private API = environment.API;
  private LOCAL = 'http://localhost:3000/';

  public novoProjeto(projeto: IProjeto, token: string) {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    return this.http.post<IProjeto>(`${this.API}projeto/novo`, projeto, {
      headers,
    });
  }

  public buscarProjetos(id: string, token: string) {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    return this.http.get<IProjeto[]>(`${this.LOCAL}projeto?id=${id}`, {
      headers,
    });
  }
}
