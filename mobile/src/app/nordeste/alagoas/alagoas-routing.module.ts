import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlagoasPage } from './alagoas.page';

const routes: Routes = [
  {
    path: '',
    component: AlagoasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlagoasPageRoutingModule {}
