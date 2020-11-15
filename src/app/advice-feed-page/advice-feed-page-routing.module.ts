import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdviceFeedPagePage } from './advice-feed-page.page';

const routes: Routes = [
  {
    path: '',
    component: AdviceFeedPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdviceFeedPagePageRoutingModule {}
