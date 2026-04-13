import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goias',
  templateUrl: './goias.page.html',
  styleUrls: ['./goias.page.scss'],
  standalone: false,
})
export class GoiasPage implements OnInit {

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

}
