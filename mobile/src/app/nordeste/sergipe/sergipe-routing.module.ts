import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SergipePage } from './sergipe.page';

const routes: Routes = [
  {
    path: '',
    component: SergipePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SergipePageRoutingModule {}
