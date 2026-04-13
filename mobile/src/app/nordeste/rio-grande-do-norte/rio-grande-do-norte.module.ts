import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RioGrandeDoNortePageRoutingModule } from './rio-grande-do-norte-routing.module';

import { RioGrandeDoNortePage } from './rio-grande-do-norte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RioGrandeDoNortePageRoutingModule
  ],
  declarations: [RioGrandeDoNortePage]
})
export class RioGrandeDoNortePageModule {}
