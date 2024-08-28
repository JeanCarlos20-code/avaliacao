import { Component } from '@angular/core';

@Component({
  selector: 'app-evaluation-history',
  templateUrl: './evaluation-history.component.html',
  styleUrl: './evaluation-history.component.scss'
})
export class EvaluationHistoryComponent {
  selectedRowIndex: number | null = null;  // Para rastrear a linha selecionada
  menuItems = [
    { label: 'Avaliar funcionário', link: '/home-cnpj/employee-avaliation' },
    { label: 'Home', link: '/home-cnpj' },
    { label: 'Avaliação de outras pessoas', link: '/home-cnpj/evaluation-other-people' }
  ];
  evaluations = [
    { name: 'Vinicius', value: 4.5, description: "A experiência com o produto foi excelente. A qualidade superou as expectativas, com durabilidade e design sofisticado. O atendimento ao cliente foi ágil e atencioso, contribuindo para uma compra satisfatória. Recomendo este produto para quem busca qualidade e ótimo custo-benefício." },
    { name: 'Abner', value: 1.0, description: "Horrível" },
    { name: 'Breno', value: 2.0, description: "Jogou batman lego no expediente" },
  ];
  toggleSubtable(index: number): void {
    // Alterna a exibição da subtabela
    this.selectedRowIndex = this.selectedRowIndex === index ? null : index;
  }

  calculaMedia(evaluation: any, calculeIndex: number): number {
    switch (calculeIndex) {
      case 1:
        return (evaluation.nota * 0.4);
      case 2:
        return (evaluation.nota * 0.3);
      case 3:
        return (evaluation.nota * 0.2);
      case 4:
        return (evaluation.nota * 0.1);
      default:
        return 0;
    }
  }
}
