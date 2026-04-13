import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RiograndedosulPage } from './riograndedosul.page';

const routes: Routes = [
  {
    path: '',
    component: RiograndedosulPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RiograndedosulPageRoutingModule {}
