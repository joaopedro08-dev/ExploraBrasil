import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatoGrossoDoSulPage } from './mato-grosso-do-sul.page';

const routes: Routes = [
  {
    path: '',
    component: MatoGrossoDoSulPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatoGrossoDoSulPageRoutingModule {}
