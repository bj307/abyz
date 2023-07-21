import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NavbarComponent } from 'src/app/componentes/navbar/navbar.component';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-sessao',
  templateUrl: './sessao.component.html',
  styleUrls: ['./sessao.component.css'],
})
export class SessaoComponent implements OnInit {
  titulo = '';
  button = '';
  cadastro: boolean = false;
  login: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private navbar: NavbarComponent
  ) {}

  ngOnInit(): void {
    this.titulo = 'Login';
    this.button = 'Cadastre-se';
    this.cadastro = false;
    this.login = true;
  }

  public alterarCadastroOuLogin() {
    if (this.cadastro) {
      this.titulo = 'Login';
      this.button = 'Cadastre-se';
      this.login = true;
      this.cadastro = false;
    } else if (this.login) {
      this.titulo = 'Cadastro';
      this.button = 'Faça Login';
      this.login = false;
      this.cadastro = true;
    }
  }
}
