import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoiasPage } from './goias.page';

const routes: Routes = [
  {
    path: '',
    component: GoiasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoiasPageRoutingModule {}
