import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js/auto';

Chart.register(...registerables);

@Component({
  selector: 'app-sao-paulo',
  templateUrl: './sao-paulo.page.html',
  styleUrls: ['./sao-paulo.page.scss'],
  standalone: false,
})
export class SaoPauloPage implements OnInit, AfterViewInit {

  @ViewChild('barChart') barChart!: ElementRef;
  @ViewChild('pecChart') pecChart!: ElementRef; 

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
  }

  ngAfterViewInit() {
    this.createAgriChart();
    this.createPecChart();
  }

  createAgriChart() {
    new Chart(this.barChart.nativeElement, {
      type: 'bar',
      data: {
        labels: [
          'Cana-de-açúcar', 'Laranja', 'Soja', 'Milho em grão', 'Café',
          'Amendoim', 'Tomate', 'Banana', 'Limão', 'Mandioca', 'Outros'
        ],
        datasets: [{
          label: 'Valor da Produção (Mil Reais)',
          data: [
            56729446, 15433331, 11912646, 5111510, 4568833,
            2888150, 2548337, 1986449, 1654429, 1498667, 6928225
          ],
          backgroundColor: '#1f77b4',
          borderColor: '#1f77b4',
          borderWidth: 0
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                const value = Number(context.parsed.x ?? context.raw ?? 0);
                return value.toLocaleString('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: 0 }) + ' Mil Reais';
              }
            }
          }
        },
        scales: {
          x: {
            beginAtZero: true,
            ticks: {
              callback: function (value) {
                return Number(value).toLocaleString('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: 0 }) + ' Mil Reais';
              },
              maxTicksLimit: 6
            },
            grid: {
              display: false
            }
          },
          y: {
            grid: {
              display: false
            }
          }
        }
      }
    });
  }

  createPecChart() {
    new Chart(this.pecChart.nativeElement, {
      type: 'bar',
      data: {
        labels: [
          'Galináceos', 'Bovinos (Bois e Vacas)', 'Codornas', 'Suínos (Porcos)',
          'Equinos (Cavalos)', 'Ovinos (Ovelhas e Carneiros)', 'Bubalinos (Búfalos)',
          'Caprinos (Bodes e Cabras)'
        ],
        datasets: [{
          label: 'Rebanho (Cabeças)',
          data: [
            205686533, 10768360, 2512113, 1587613,
            353325, 295389, 119030, 49008
          ],
          backgroundColor: '#2ca02c',
          borderColor: '#2ca02c',
          borderWidth: 0
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                const value = Number(context.parsed.x ?? context.raw ?? 0);
                return value.toLocaleString('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: 0 }) + ' Cabeças';
              }
            }
          }
        },
        scales: {
          x: {
            beginAtZero: true,
            ticks: {
              callback: function (value) {
                return Number(value).toLocaleString('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: 0 }) + ' Cabeças';
              },
              maxTicksLimit: 6
            },
            grid: {
              display: false
            }
          },
          y: {
            grid: {
              display: false
            }
          }
        }
      }
    });
  }
}