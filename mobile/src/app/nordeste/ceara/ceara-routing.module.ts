import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CearaPage } from './ceara.page';

const routes: Routes = [
  {
    path: '',
    component: CearaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CearaPageRoutingModule {}
