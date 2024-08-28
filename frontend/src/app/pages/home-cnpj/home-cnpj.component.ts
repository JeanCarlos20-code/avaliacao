import { Component } from '@angular/core';

@Component({
  selector: 'app-home-cnpj',
  templateUrl: './home-cnpj.component.html',
  styleUrl: './home-cnpj.component.scss'
})
export class HomeCnpjComponent {
  menuItems = [
    { label: 'Avaliar funcionário', link: '/home-cnpj/employee-avaliation' },
    { label: 'Histórico de avaliação', link: '/home-cnpj/historic' },
    { label: 'Avaliação de outras pessoas', link: '#' }
  ]; // Define os itens de menu aqui

  constructor() { }

  ngOnInit(): void { }
}
