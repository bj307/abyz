import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Message } from 'primeng/api';
import { IProjeto } from 'src/app/interfaces/IProjeto';
import { IUsuario } from 'src/app/interfaces/IUsuario';
import { ProjetoService } from 'src/app/services/projeto.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-novoprojeto',
  templateUrl: './novoprojeto.component.html',
  styleUrls: ['./novoprojeto.component.css'],
})
export class NovoprojetoComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private projetoService: ProjetoService,
    private usuarioService: UsuarioService
  ) {}

  projetoForm!: FormGroup;
  nome: string = '';
  data: string = '';
  time: string[] = [];
  descricao: string = '';
  alerta!: Message[];
  message = false;

  ngOnInit(): void {
    this.message = false;
    this.projetoForm = this.formBuilder.group({
      nome: ['', [Validators.required]],
      data: ['', [Validators.required]],
    });
  }

  submitProjeto() {
    if (this.projetoForm.valid) {
      const usuario_logado = sessionStorage.getItem('usuario_logado');

      const { email, jwtToken } = JSON.parse(usuario_logado!);

      const usuario: any = this.usuarioService.usuarioPorEmail(email);

      const projeto: IProjeto = {
        nome: this.nome,
        descricao: this.descricao,
        data: this.data,
        status: 'aberto',
        time: this.time,
      };

      this.projetoService.novoProjeto(projeto, jwtToken).subscribe(
        (res) => {
          (this.message = true),
            (this.alerta = [
              {
                severity: 'success',
                summary: 'Projeto criado.',
              },
            ]);
        },
        (err) => {
          console.log(err),
            (this.message = true),
            (this.alerta = [
              {
                severity: 'error',
                summary: err.error.message,
              },
            ]);
        }
      );
    }
  }
}
