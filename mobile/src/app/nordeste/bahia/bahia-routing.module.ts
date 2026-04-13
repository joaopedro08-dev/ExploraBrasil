import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BahiaPage } from './bahia.page';

const routes: Routes = [
  {
    path: '',
    component: BahiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BahiaPageRoutingModule {}
