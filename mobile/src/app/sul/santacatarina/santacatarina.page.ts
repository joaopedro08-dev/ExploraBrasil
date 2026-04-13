import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-santacatarina',
  templateUrl: './santacatarina.page.html',
  styleUrls: ['./santacatarina.page.scss'],
  standalone: false,
})
export class SantacatarinaPage implements OnInit {

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
