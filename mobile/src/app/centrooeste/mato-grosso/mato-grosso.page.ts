import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mato-grosso',
  templateUrl: './mato-grosso.page.html',
  styleUrls: ['./mato-grosso.page.scss'],
  standalone: false,
})
export class MatoGrossoPage implements OnInit {

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
