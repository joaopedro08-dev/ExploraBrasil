import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DistritoFederalPageRoutingModule } from './distrito-federal-routing.module';

import { DistritoFederalPage } from './distrito-federal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DistritoFederalPageRoutingModule
  ],
  declarations: [DistritoFederalPage]
})
export class DistritoFederalPageModule {}
