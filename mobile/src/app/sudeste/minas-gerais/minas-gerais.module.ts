import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MinasGeraisPageRoutingModule } from './minas-gerais-routing.module';

import { MinasGeraisPage } from './minas-gerais.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MinasGeraisPageRoutingModule
  ],
  declarations: [MinasGeraisPage]
})
export class MinasGeraisPageModule {}
