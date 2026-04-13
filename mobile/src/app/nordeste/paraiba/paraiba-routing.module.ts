import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParaibaPage } from './paraiba.page';

const routes: Routes = [
  {
    path: '',
    component: ParaibaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParaibaPageRoutingModule {}
