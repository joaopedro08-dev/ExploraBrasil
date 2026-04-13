import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParanaPageRoutingModule } from './parana-routing.module';

import { ParanaPage } from './parana.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParanaPageRoutingModule
  ],
  declarations: [ParanaPage]
})
export class ParanaPageModule {}
