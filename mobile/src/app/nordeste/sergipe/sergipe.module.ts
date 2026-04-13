import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SergipePageRoutingModule } from './sergipe-routing.module';

import { SergipePage } from './sergipe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SergipePageRoutingModule
  ],
  declarations: [SergipePage]
})
export class SergipePageModule {}
