import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CearaPageRoutingModule } from './ceara-routing.module';

import { CearaPage } from './ceara.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CearaPageRoutingModule
  ],
  declarations: [CearaPage]
})
export class CearaPageModule {}
