import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaranhaoPage } from './maranhao.page';

const routes: Routes = [
  {
    path: '',
    component: MaranhaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaranhaoPageRoutingModule {}
