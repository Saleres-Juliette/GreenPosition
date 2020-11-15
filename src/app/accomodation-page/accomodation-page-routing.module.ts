import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccomodationPagePage } from './accomodation-page.page';

const routes: Routes = [
  {
    path: '',
    component: AccomodationPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccomodationPagePageRoutingModule {}
