import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AmazonasPageRoutingModule } from './amazonas-routing.module';

import { AmazonasPage } from './amazonas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AmazonasPageRoutingModule
  ],
  declarations: [AmazonasPage]
})
export class AmazonasPageModule {}
