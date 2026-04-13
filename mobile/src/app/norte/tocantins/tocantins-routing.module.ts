import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TocantinsPage } from './tocantins.page';

const routes: Routes = [
  {
    path: '',
    component: TocantinsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TocantinsPageRoutingModule {}
