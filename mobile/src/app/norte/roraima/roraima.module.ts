import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoraimaPageRoutingModule } from './roraima-routing.module';

import { RoraimaPage } from './roraima.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoraimaPageRoutingModule
  ],
  declarations: [RoraimaPage]
})
export class RoraimaPageModule {}
