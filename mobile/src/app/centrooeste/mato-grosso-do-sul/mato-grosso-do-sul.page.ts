import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mato-grosso-do-sul',
  templateUrl: './mato-grosso-do-sul.page.html',
  styleUrls: ['./mato-grosso-do-sul.page.scss'],
  standalone: false,
})
export class MatoGrossoDoSulPage implements OnInit {

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
