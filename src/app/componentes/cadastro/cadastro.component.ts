import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Message } from 'primeng/api';
import { ICadastro } from 'src/app/interfaces/ICadastro';
import { CadastroService } from 'src/app/services/cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private cadastroService: CadastroService
  ) {}

  cadastroForm!: FormGroup;
  nome: string = '';
  email: string = '';
  password: string = '';
  alerta!: Message[];
  message = false;

  ngOnInit(): void {
    this.message = false;
    this.cadastroForm = this.formBuilder.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(6), Validators.required]],
    });
  }

  submitCadastro() {
    if (this.cadastroForm.valid) {
      const usuario: ICadastro = {
        nome: this.nome,
        email: this.email,
        password: this.password,
      };
      this.cadastroService.cadastro(usuario).subscribe(
        (res) => {
          (this.message = true),
            (this.alerta = [
              {
                severity: 'success',
                summary: 'Cadastro concluido, faça login.',
              },
            ]);
        },
        (err) => {
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
