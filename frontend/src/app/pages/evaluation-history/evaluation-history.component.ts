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
    { label: 'Avaliação de outras pessoas', link: '#' }
  ];
  avaliacoes = [
    { name: 'Vinicius', value: 4.5, description: "A experiência com o produto foi excelente. A qualidade superou as expectativas, com durabilidade e design sofisticado. O atendimento ao cliente foi ágil e atencioso, contribuindo para uma compra satisfatória. Recomendo este produto para quem busca qualidade e ótimo custo-benefício." },
    { name: 'Abner', value: 1.0, description: "Horrível" },
    { name: 'Breno', value: 2.0, description: "Jogou batman lego no expediente" },
  ];
  toggleSubtable(index: number): void {
    // Alterna a exibição da subtabela
    this.selectedRowIndex = this.selectedRowIndex === index ? null : index;
  }

  calculaMedia(avaliacao: any, calculoIndex: number): number {
    // Implementa lógica para calcular a média com base nos dados de avaliação e no índice de cálculo
    // Aqui, estou retornando um valor fixo como exemplo, mas você pode implementar a lógica de cálculo real
    switch (calculoIndex) {
      case 1:
        return (avaliacao.nota * 0.4);  // Exemplo: nota ponderada por 0.4
      case 2:
        return (avaliacao.nota * 0.3);  // Exemplo: nota ponderada por 0.3
      case 3:
        return (avaliacao.nota * 0.2);  // Exemplo: nota ponderada por 0.2
      case 4:
        return (avaliacao.nota * 0.1);  // Exemplo: nota ponderada por 0.1
      default:
        return 0;
    }
  }
}
