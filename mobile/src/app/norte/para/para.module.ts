import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParaPageRoutingModule } from './para-routing.module';

import { ParaPage } from './para.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParaPageRoutingModule
  ],
  declarations: [ParaPage]
})
export class ParaPageModule {}
