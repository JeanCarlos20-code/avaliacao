import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-employee-avaliation',
  templateUrl: './employee-avaliation.component.html',
  styleUrl: './employee-avaliation.component.scss'
})
export class EmployeeAvaliationComponent {
  menuItems = [
    { label: 'Home', link: '/home-cnpj' },
    { label: 'Histórico de avaliação', link: '/home-cnpj/historic' },
    { label: 'Avaliação de outras pessoas', link: '/home-cnpj/evaluation-other-people' }
  ];

  employee = {
    name: 'João da Silva',
    age: 30,
    currentEvaluation: 4.5,
    evaluations: [
      { reviewerName: 'Carlos', description: 'Avaliação 1', value: 3.5 },
      { reviewerName: 'Carlos', description: 'Avaliação 2', value: 4.0 },
      { reviewerName: 'Carlos', description: 'Avaliação 3', value: 4.5 },
      { reviewerName: 'Carlos', description: 'Avaliação 3', value: 4.5 },
      { reviewerName: 'Carlos', description: 'Avaliação 3', value: 4.5 },
    ]
  };

  @ViewChildren('bigCircle, evalCircle') circles!: QueryList<ElementRef>;

  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];
}
