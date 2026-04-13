import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MinasGeraisPage } from './minas-gerais.page';

const routes: Routes = [
  {
    path: '',
    component: MinasGeraisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MinasGeraisPageRoutingModule {}
