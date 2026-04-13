import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RondoniaPageRoutingModule } from './rondonia-routing.module';

import { RondoniaPage } from './rondonia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RondoniaPageRoutingModule
  ],
  declarations: [RondoniaPage]
})
export class RondoniaPageModule {}
