import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AmapaPageRoutingModule } from './amapa-routing.module';

import { AmapaPage } from './amapa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AmapaPageRoutingModule
  ],
  declarations: [AmapaPage]
})
export class AmapaPageModule {}
