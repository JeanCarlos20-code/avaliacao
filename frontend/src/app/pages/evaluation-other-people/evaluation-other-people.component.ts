import { ChangeDetectionStrategy, Component, ElementRef, inject, QueryList, ViewChildren } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-evaluation-other-people',
  templateUrl: './evaluation-other-people.component.html',
  styleUrl: './evaluation-other-people.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvaluationOtherPeopleComponent {
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

  private readonly _formBuilder = inject(FormBuilder);

  readonly toppings = this._formBuilder.group({
    starOne: true,
    starTwo: true,
    starThree: true,
    starFour: true,
    starFive: true,
  });

  lines: { x1: number, y1: number, x2: number, y2: number }[] = [];

  @ViewChildren('bigCircle, evalCircle') circles!: QueryList<ElementRef>;
}
