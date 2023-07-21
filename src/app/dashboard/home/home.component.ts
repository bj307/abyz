import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { IUsuario } from 'src/app/interfaces/IUsuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeDashComponent implements OnInit {
  constructor(private usuarioService: UsuarioService) {}

  usuario: IUsuario = {
    id: '',
    nome: '',
    email: '',
    projetos: [],
    token: '',
  };

  items: MenuItem[] | undefined;

  ngOnInit(): void {
    const sessao = sessionStorage.getItem('usuario_logado');
    if (sessao) {
      const { email, jwtToken } = JSON.parse(sessao);

      const data = this.usuarioService
        .usuarioPorEmail(email)
        .subscribe((res: any) => {
          (this.usuario.id = res._id),
            (this.usuario.nome = res.nome),
            (this.usuario.email = res.email),
            (this.usuario.projetos = res.projetos),
            (this.usuario.token = jwtToken);
        });
    }

    this.items = [
      {
        label: 'Início',
        icon: 'pi pi-home',
        styleClass: 'p-button-primary',
      },
      {
        label: 'Meus Projetos',
        icon: 'pi pi-microsoft',
        styleClass: 'p-button-success',
      },
      {
        label: 'Criar Projeto',
        icon: 'pi pi-plus',
        styleClass: 'p-button-warning',
      },
      {
        label: 'Meu Perfil',
        icon: 'pi pi-user',
        styleClass: 'p-button-danger',
      },
    ];
  }
}