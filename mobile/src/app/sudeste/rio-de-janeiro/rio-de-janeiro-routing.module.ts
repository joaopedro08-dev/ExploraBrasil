import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RioDeJaneiroPage } from './rio-de-janeiro.page';

const routes: Routes = [
  {
    path: '',
    component: RioDeJaneiroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RioDeJaneiroPageRoutingModule {}
