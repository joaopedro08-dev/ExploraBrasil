import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TocantinsPageRoutingModule } from './tocantins-routing.module';

import { TocantinsPage } from './tocantins.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TocantinsPageRoutingModule
  ],
  declarations: [TocantinsPage]
})
export class TocantinsPageModule {}
