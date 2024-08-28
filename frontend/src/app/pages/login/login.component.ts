import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(public route: Router) {

  }

  onSubmit() {
    if (this.username === '' || this.password === '') {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    else if (this.username === 'admin' && this.password === 'admin') {
      this.route.navigate(['home-cnpj']);
    }
    console.log('Usuário:', this.username);
    console.log('Senha:', this.password);
  }
}
