import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PiauiPageRoutingModule } from './piaui-routing.module';

import { PiauiPage } from './piaui.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PiauiPageRoutingModule
  ],
  declarations: [PiauiPage]
})
export class PiauiPageModule {}
