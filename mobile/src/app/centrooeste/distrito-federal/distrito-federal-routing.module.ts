import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DistritoFederalPage } from './distrito-federal.page';

const routes: Routes = [
  {
    path: '',
    component: DistritoFederalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DistritoFederalPageRoutingModule {}
