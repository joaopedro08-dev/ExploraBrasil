import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-espirito-santo',
  templateUrl: './espirito-santo.page.html',
  styleUrls: ['./espirito-santo.page.scss'],
  standalone: false,
})
export class EspiritoSantoPage implements OnInit {

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
