import { Component } from '@angular/core';

@Component({
  selector: 'app-home-cpf',
  templateUrl: './home-cpf.component.html',
  styleUrl: './home-cpf.component.scss'
})
export class HomeCpfComponent {
  employees = [
    { name: 'Carlos Silva', position: 'Desenvolvedor' },
    { name: 'Maria Oliveira', position: 'Gerente de Projetos' },
    { name: 'João Souza', position: 'Analista de Testes' }
  ];

  bestRatedEmployees = [
    { name: 'Carlos Silva', rating: 4.9 },
    { name: 'Maria Oliveira', rating: 4.8 },
    { name: 'João Souza', rating: 4.7 }
  ];

  worstRatedEmployees = [
    { name: 'Ana Paula', rating: 2.5 },
    { name: 'Lucas Pereira', rating: 2.8 },
    { name: 'Felipe Costa', rating: 3.0 }
  ];

  constructor() { }

  ngOnInit(): void { }
}
