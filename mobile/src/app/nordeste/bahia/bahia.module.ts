import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BahiaPageRoutingModule } from './bahia-routing.module';

import { BahiaPage } from './bahia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BahiaPageRoutingModule
  ],
  declarations: [BahiaPage]
})
export class BahiaPageModule {}
