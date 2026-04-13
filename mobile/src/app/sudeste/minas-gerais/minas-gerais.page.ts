import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-minas-gerais',
  templateUrl: './minas-gerais.page.html',
  styleUrls: ['./minas-gerais.page.scss'],
  standalone: false,
})
export class MinasGeraisPage implements OnInit {

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
