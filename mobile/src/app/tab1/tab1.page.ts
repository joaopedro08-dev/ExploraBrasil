import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page implements OnInit, AfterViewInit {
  imagemBrasil: HTMLImageElement | null = null;
  areas: NodeListOf<HTMLAreaElement> | null = null;
  tamanhoBaseLargura: number | null = null;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.imagemBrasil = document.getElementById('mapa-brasil-img') as HTMLImageElement;
    this.areas = document.querySelectorAll('map[name="image-map"] area');

    if (this.imagemBrasil) {
      this.imagemBrasil.onload = () => {
        if (this.imagemBrasil) { 
          this.tamanhoBaseLargura = this.imagemBrasil.naturalWidth;
          this.atualizarCoordenadas();
        }
      };
      if (this.imagemBrasil.complete && this.imagemBrasil) { 
        this.tamanhoBaseLargura = this.imagemBrasil.naturalWidth;
        this.atualizarCoordenadas();
      }
    }

    window.addEventListener('resize', this.atualizarCoordenadas.bind(this));
  }

  atualizarCoordenadas() {
    if (!this.imagemBrasil || !this.areas || !this.tamanhoBaseLargura) {
      return;
    }

    const larguraAtual = this.imagemBrasil.offsetWidth;
    const proporcao = larguraAtual / this.tamanhoBaseLargura;

    this.areas.forEach(area => {
      const coordsOriginais = area.dataset['coordsOriginais']?.split(',').map(Number) || [];
      const novasCoords = coordsOriginais.map(coord => Math.round(coord * proporcao)).join(',');
      area.coords = novasCoords;
    });
  }
}