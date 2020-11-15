import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MobilityPagePage } from './mobility-page.page';

const routes: Routes = [
  {
    path: '',
    component: MobilityPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MobilityPagePageRoutingModule {}
