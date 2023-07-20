import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Checkbox } from 'primeng/checkbox';

@Component({
  selector: 'app-sessao',
  templateUrl: './sessao.component.html',
  styleUrls: ['./sessao.component.css'],
})
export class SessaoComponent implements OnInit {
  titulo = 'Login';

  constructor(private formBuilder: FormBuilder) {}

  loginForm!: FormGroup;
  email: string | undefined;
  password: string | undefined;

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      senha: ['', [Validators.minLength(6), Validators.required]],
    });
  }
}
