import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EspiritoSantoPage } from './espirito-santo.page';

const routes: Routes = [
  {
    path: '',
    component: EspiritoSantoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EspiritoSantoPageRoutingModule {}
