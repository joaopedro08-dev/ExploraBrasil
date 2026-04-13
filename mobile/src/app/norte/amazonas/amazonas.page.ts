import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-amazonas',
  templateUrl: './amazonas.page.html',
  styleUrls: ['./amazonas.page.scss'],
  standalone: false,
})
export class AmazonasPage implements OnInit {
  @ViewChild('mangueCanvas', { static: true }) mangueCanvas!: ElementRef;
  public chart: any;

  constructor() { }

  ngOnInit() {
    this.criarGraficoMangue();
  }

  criarGraficoMangue() {
    const dadosMangue = {
      labels: ['Maranhão', 'Pará', 'Amapá', 'Bahia', 'Sergipe', 'Paraná', 'São Paulo', 'Ceará', 'Pernambuco', 'Rio Grande do Norte', 'Paraíba', 'Rio de Janeiro', 'Santa Catarina', 'Espírito Santo', 'Piauí', 'Alagoas'],
      datasets: [{
        label: 'Área de Mangue (em mil hectares)',
        data: [468, 222.5, 97, 69, 21, 20, 18, 18, 14, 13, 12, 10, 7, 7, 6, 4],
        backgroundColor: 'rgba(54, 162, 235, 0.7)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }]
    };

    this.chart = new Chart(this.mangueCanvas.nativeElement, {
      type: 'bar',
      data: dadosMangue,
      options: {
        indexAxis: 'y',
        scales: {
          x: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Área (mil hectares)'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Estado'
            }
          }
        },
        plugins: {
          legend: {
            display: false
          },
          title: {
            display: true,
            text: 'Área de Mangue - em mil hectares - por Estado',
            font: {
              size: 16
            }
          }
        }
      }
    });
  }
}