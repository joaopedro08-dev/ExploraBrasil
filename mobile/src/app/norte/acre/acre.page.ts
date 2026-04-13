import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acre',
  templateUrl: './acre.page.html',
  styleUrls: ['./acre.page.scss'],
  standalone: false,
})
export class AcrePage implements OnInit {

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
