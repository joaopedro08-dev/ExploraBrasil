import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PernambucoPageRoutingModule } from './pernambuco-routing.module';

import { PernambucoPage } from './pernambuco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PernambucoPageRoutingModule
  ],
  declarations: [PernambucoPage]
})
export class PernambucoPageModule {}
