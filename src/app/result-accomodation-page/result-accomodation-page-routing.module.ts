import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultAccomodationPagePage } from './result-accomodation-page.page';

const routes: Routes = [
  {
    path: '',
    component: ResultAccomodationPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultAccomodationPagePageRoutingModule {}
