import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MatoGrossoDoSulPageRoutingModule } from './mato-grosso-do-sul-routing.module';

import { MatoGrossoDoSulPage } from './mato-grosso-do-sul.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatoGrossoDoSulPageRoutingModule
  ],
  declarations: [MatoGrossoDoSulPage]
})
export class MatoGrossoDoSulPageModule {}
