import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RondoniaPage } from './rondonia.page';

const routes: Routes = [
  {
    path: '',
    component: RondoniaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RondoniaPageRoutingModule {}
