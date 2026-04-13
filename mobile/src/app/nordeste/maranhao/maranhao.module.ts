import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaranhaoPageRoutingModule } from './maranhao-routing.module';

import { MaranhaoPage } from './maranhao.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaranhaoPageRoutingModule
  ],
  declarations: [MaranhaoPage]
})
export class MaranhaoPageModule {}