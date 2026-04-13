import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcrePage } from './acre.page';

const routes: Routes = [
  {
    path: '',
    component: AcrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcrePageRoutingModule {}
