import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AmazonasPage } from './amazonas.page';

const routes: Routes = [
  {
    path: '',
    component: AmazonasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AmazonasPageRoutingModule {}
