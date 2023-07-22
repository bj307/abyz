import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.css'],
})
export class InicialComponent implements OnInit {
  isColapse = false;
  button = '';

  ngOnInit(): void {
    this.isColapse = true;
    this.button = ' pi-angle-up';
  }

  colapse() {
    if (this.isColapse) {
      this.isColapse = false;
      this.button = 'pi-angle-down';
    } else {
      this.isColapse = true;
      this.button = ' pi-angle-up';
    }
  }

  abreProjeto() {}
}
