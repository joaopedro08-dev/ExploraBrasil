import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-maranhao',
  templateUrl: './maranhao.page.html',
  styleUrls: ['./maranhao.page.scss'],
  standalone: false,
})
export class MaranhaoPage implements OnInit, AfterViewInit {
  @ViewChild('barChart') barChart!: ElementRef;
  chart: any;

  barChartData: any;
  barChartLabels!: string[];
  barChartOptions: any;

  constructor() { }

  verificarConexao() {
    const alerta = document.getElementById("offline-alert");
    if (alerta) {
      alerta.style.display = navigator.onLine ? "none" : "block";
    }
  }

  ngOnInit() {
    this.verificarConexao();

    window.addEventListener("online", () => this.verificarConexao());
    window.addEventListener("offline", () => this.verificarConexao());

    this.barChartLabels = [
      'PETROLEO BRASILEIRO S A PETROBRAS',
      'EMBRAER S.A.',
      'NORTE ENERGIA S/A',
      'VALE S.A.',
      'CONSTRUTORA NORBERTO ODEBRECHT ...',
      'ESTADO DE SAO PAULO',
      'TRANSPORTADORA ASSOCIADA DE GAS S.',
      'TIM CELULAR S.A.',
      'TELEFONICA BRASIL S.A.',
      'FCA FIAT CHRYSLER AUTOMOVEIS BRASI...',
      'PETROBRAS NETHERLANDS B V',
      'OI MOVEL S.A. - EM RECUPERACAO JUDICI...',
      'ENERGIA SUSTENTAVEL DO BRASIL S.A.',
      'FIBRIA CELULOSE S.A.',
      'KLABIN S.A.',
      'CAIXA ECONOMICA FEDERAL',
      'SANTO ANTONIO ENERGIA S.A.',
      'FINANCIADORA DE ESTUDOS E PROJETO...',
      'ESTADO DO RIO DE JANEIRO',
      'JBS S.A.',
      'BRASKEM S.A.',
      'BANCO REGIONAL DE DESENVOLVIMENT...',
      'BANCO DO BRASIL S.A.',
    ];

    this.barChartData = {
      labels: this.barChartLabels,
      datasets: [
        {
          label: 'Financiamento',
          data: [
            62.429, 49.377, 25.388, 22.489, 18.133, 14.484, 13.302, 12.142, 10.265,
            10.028, 9.878, 9.828, 9.420, 9.391, 9.039, 8.719, 8.125, 8.000, 7.695,
            7.662, 7.341, 7.254, 7.245,
          ],
          backgroundColor: 'rgba(0, 123, 128, 0.8)',
        },
        {
          label: 'Renda variável',
          data: [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          ],
          backgroundColor: 'rgba(0, 58, 115, 0.8)',
        },
      ],
    };

    this.barChartOptions = {
      indexAxis: 'y',
      responsive: true,
      scales: {
        x: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Valores (em Milhões)',
          },
        },
      },
      plugins: {
        legend: {
          position: 'bottom',
        },
        title: {
          display: true,
          text: 'Posição em 30/11/2018',
        },
      },
    };
  }

  ngAfterViewInit() {
    this.createChart();
  }

  createChart() {
    this.chart = new Chart(this.barChart.nativeElement, {
      type: 'bar',
      data: this.barChartData,
      options: this.barChartOptions,
    });
  }
}