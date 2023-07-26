import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Message } from 'primeng/api';
import { ILogin } from 'src/app/interfaces/ILogin';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {}

  loginForm!: FormGroup;
  email: string = '';
  password: string = '';
  alerta!: Message[];
  erro = false;

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(6), Validators.required]],
    });
  }

  submitLogin() {
    if (this.loginForm.valid) {
      const usuario: ILogin = {
        email: this.email,
        password: this.password,
      };
      this.loginService.login(usuario).subscribe(
        (res) => {
          console.log(res),
            sessionStorage.setItem('usuario_logado', JSON.stringify(res));
          this.router.navigate(['/in']);
        },
        (err) => {
          (this.erro = true),
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
