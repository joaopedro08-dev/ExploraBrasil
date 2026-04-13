import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParanaPage } from './parana.page';

const routes: Routes = [
  {
    path: '',
    component: ParanaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParanaPageRoutingModule {}
