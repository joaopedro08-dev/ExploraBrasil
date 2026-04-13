import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EspiritoSantoPageRoutingModule } from './espirito-santo-routing.module';

import { EspiritoSantoPage } from './espirito-santo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EspiritoSantoPageRoutingModule
  ],
  declarations: [EspiritoSantoPage]
})
export class EspiritoSantoPageModule {}
