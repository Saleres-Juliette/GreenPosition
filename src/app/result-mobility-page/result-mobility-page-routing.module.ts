import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultMobilityPagePage } from './result-mobility-page.page';

const routes: Routes = [
  {
    path: '',
    component: ResultMobilityPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultMobilityPagePageRoutingModule {}
