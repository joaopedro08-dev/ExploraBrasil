import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RioGrandeDoNortePage } from './rio-grande-do-norte.page';

const routes: Routes = [
  {
    path: '',
    component: RioGrandeDoNortePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RioGrandeDoNortePageRoutingModule {}
