import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EssaiPage } from './essai.page';

const routes: Routes = [
  {
    path: '',
    component: EssaiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EssaiPageRoutingModule {}
