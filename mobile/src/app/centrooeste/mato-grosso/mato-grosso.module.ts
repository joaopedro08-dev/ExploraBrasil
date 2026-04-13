import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MatoGrossoPageRoutingModule } from './mato-grosso-routing.module';

import { MatoGrossoPage } from './mato-grosso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatoGrossoPageRoutingModule
  ],
  declarations: [MatoGrossoPage]
})
export class MatoGrossoPageModule {}
