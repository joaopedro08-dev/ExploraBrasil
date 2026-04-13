import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PernambucoPage } from './pernambuco.page';

const routes: Routes = [
  {
    path: '',
    component: PernambucoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PernambucoPageRoutingModule {}
