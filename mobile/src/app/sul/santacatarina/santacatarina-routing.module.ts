import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SantacatarinaPage } from './santacatarina.page';

const routes: Routes = [
  {
    path: '',
    component: SantacatarinaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SantacatarinaPageRoutingModule {}
