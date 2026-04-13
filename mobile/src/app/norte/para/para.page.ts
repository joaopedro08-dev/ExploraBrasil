import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-para',
  templateUrl: './para.page.html',
  styleUrls: ['./para.page.scss'],
  standalone: false,
})
export class ParaPage implements OnInit {

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
