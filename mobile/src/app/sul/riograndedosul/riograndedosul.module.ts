import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RiograndedosulPageRoutingModule } from './riograndedosul-routing.module';

import { RiograndedosulPage } from './riograndedosul.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RiograndedosulPageRoutingModule
  ],
  declarations: [RiograndedosulPage]
})
export class RiograndedosulPageModule {}
