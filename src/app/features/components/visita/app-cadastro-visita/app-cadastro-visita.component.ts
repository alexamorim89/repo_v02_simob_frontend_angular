import { AfterViewInit, Component } from '@angular/core';
import { Chart, ChartConfiguration, ChartType, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'acmo-app-cadastro-visita',
  imports: [],
  templateUrl: './app-cadastro-visita.component.html',
  styleUrl: './app-cadastro-visita.component.css',
})
export class AppCadastroVisitaComponent implements AfterViewInit {

    ngAfterViewInit(): void {
      this.renderChart();
   }

  renderChart(): void {
    const ctx = document.getElementById('visitasChart') as HTMLCanvasElement;

    const data = {
      labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
      datasets: [
        {
          label: 'Visitas Registradas',
          data: [120, 90, 150, 80, 200],
          backgroundColor: 'rgba(59, 130, 246, 0.5)', // azul Tailwind
          borderColor: 'rgba(59, 130, 246, 1)',
          borderWidth: 1
        }
      ]
    };

    const config: ChartConfiguration = {
      type: 'bar' as ChartType,
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true
          }
        }
      }
    };

    new Chart(ctx, config);
  }


}
