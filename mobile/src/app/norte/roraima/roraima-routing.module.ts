import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoraimaPage } from './roraima.page';

const routes: Routes = [
  {
    path: '',
    component: RoraimaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoraimaPageRoutingModule {}
