import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-distrito-federal',
  templateUrl: './distrito-federal.page.html',
  styleUrls: ['./distrito-federal.page.scss'],
  standalone: false,
})
export class DistritoFederalPage implements OnInit {

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
