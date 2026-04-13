import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Keyboard } from '@capacitor/keyboard';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent implements OnInit {
  constructor(private platform: Platform) {}

  ngOnInit() {
    this.initializeApp();
    Keyboard.setScroll({ isDisabled: true });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      document.body.classList.toggle('light', true); 
    });
  }
}