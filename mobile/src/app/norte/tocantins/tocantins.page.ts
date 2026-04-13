import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tocantins',
  templateUrl: './tocantins.page.html',
  styleUrls: ['./tocantins.page.scss'],
  standalone: false,
})
export class TocantinsPage implements OnInit {

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
