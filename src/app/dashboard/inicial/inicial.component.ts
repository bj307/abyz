import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProjeto } from 'src/app/interfaces/IProjeto';
import { ProjetoService } from 'src/app/services/projeto.service';

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.css'],
})
export class InicialComponent implements OnInit {
  constructor(private router: Router, private projetoService: ProjetoService) {}

  projetos: IProjeto[] = [];

  ngOnInit(): void {
    const sessao = sessionStorage.getItem('usuario_logado');
    if (sessao) {
      const { id, jwtToken } = JSON.parse(sessao);
      this.projetoService.buscarProjetos(id, jwtToken).subscribe((res) => {
        this.projetos = res;
        for (let projeto of this.projetos) {
          projeto.button = 'pi-angle-up';
          projeto.colapse = false;
        }
      });
    } else {
      this.router.navigate(['/iniciar']);
    }
  }

  colapse(projeto: IProjeto) {
    if (projeto.colapse) {
      projeto.colapse = false;
      projeto.button = 'pi-angle-up';
    } else {
      projeto.colapse = true;
      projeto.button = 'pi-angle-down';
    }
  }

  abreProjeto() {}
}
