import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoiasPageRoutingModule } from './goias-routing.module';

import { GoiasPage } from './goias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoiasPageRoutingModule
  ],
  declarations: [GoiasPage]
})
export class GoiasPageModule {}
