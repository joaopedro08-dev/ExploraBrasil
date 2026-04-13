import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AmapaPage } from './amapa.page';

const routes: Routes = [
  {
    path: '',
    component: AmapaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AmapaPageRoutingModule {}
