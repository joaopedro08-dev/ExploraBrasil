import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParaibaPageRoutingModule } from './paraiba-routing.module';

import { ParaibaPage } from './paraiba.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParaibaPageRoutingModule
  ],
  declarations: [ParaibaPage]
})
export class ParaibaPageModule {}
