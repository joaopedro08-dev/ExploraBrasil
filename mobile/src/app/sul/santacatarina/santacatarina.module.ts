import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SantacatarinaPageRoutingModule } from './santacatarina-routing.module';

import { SantacatarinaPage } from './santacatarina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SantacatarinaPageRoutingModule
  ],
  declarations: [SantacatarinaPage]
})
export class SantacatarinaPageModule {}
