import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParaPage } from './para.page';

const routes: Routes = [
  {
    path: '',
    component: ParaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParaPageRoutingModule {}
