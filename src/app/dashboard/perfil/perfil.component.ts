import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUsuario } from 'src/app/interfaces/IUsuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
  constructor(private router: Router, private usuarioService: UsuarioService) {}

  usuario: IUsuario = {
    id: '',
    nome: '',
    email: '',
    projetos: [],
    token: '',
  };

  nProjetos = 0;

  ngOnInit(): void {
    const sessao = sessionStorage.getItem('usuario_logado');
    if (sessao) {
      const { id, jwtToken } = JSON.parse(sessao);
      this.usuarioService.buscarPorId(id).subscribe((res) => {
        this.usuario!.nome = res.nome;
        this.usuario!.email = res.email;
        this.usuario!.projetos = res.projetos;
        this.usuario!.token = jwtToken;
        this.nProjetos = this.usuario.projetos?.length!;
      });
    } else {
      this.router.navigate(['/iniciar']);
    }
  }
}
