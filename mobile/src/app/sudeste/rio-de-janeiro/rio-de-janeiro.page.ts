import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rio-de-janeiro',
  templateUrl: './rio-de-janeiro.page.html',
  styleUrls: ['./rio-de-janeiro.page.scss'],
  standalone: false,
})
export class RioDeJaneiroPage implements OnInit {

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
