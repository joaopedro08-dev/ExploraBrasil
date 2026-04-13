import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlagoasPageRoutingModule } from './alagoas-routing.module';

import { AlagoasPage } from './alagoas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlagoasPageRoutingModule
  ],
  declarations: [AlagoasPage]
})
export class AlagoasPageModule {}
