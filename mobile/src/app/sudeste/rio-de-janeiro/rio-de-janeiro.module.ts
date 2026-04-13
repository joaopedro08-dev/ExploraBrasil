import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RioDeJaneiroPageRoutingModule } from './rio-de-janeiro-routing.module';

import { RioDeJaneiroPage } from './rio-de-janeiro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RioDeJaneiroPageRoutingModule
  ],
  declarations: [RioDeJaneiroPage]
})
export class RioDeJaneiroPageModule {}
