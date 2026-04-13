import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rio-grande-do-norte',
  templateUrl: './rio-grande-do-norte.page.html',
  styleUrls: ['./rio-grande-do-norte.page.scss'],
  standalone: false,
})
export class RioGrandeDoNortePage implements OnInit {

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
