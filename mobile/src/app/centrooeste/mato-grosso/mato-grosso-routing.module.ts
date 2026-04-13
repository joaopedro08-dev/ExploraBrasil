import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatoGrossoPage } from './mato-grosso.page';

const routes: Routes = [
  {
    path: '',
    component: MatoGrossoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatoGrossoPageRoutingModule {}
