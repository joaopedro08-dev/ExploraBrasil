import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcrePageRoutingModule } from './acre-routing.module';

import { AcrePage } from './acre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcrePageRoutingModule
  ],
  declarations: [AcrePage]
})
export class AcrePageModule {}
