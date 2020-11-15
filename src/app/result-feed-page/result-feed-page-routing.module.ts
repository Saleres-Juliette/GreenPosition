import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultFeedPagePage } from './result-feed-page.page';

const routes: Routes = [
  {
    path: '',
    component: ResultFeedPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultFeedPagePageRoutingModule {}
