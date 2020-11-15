import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultFeedPagePageRoutingModule } from './result-feed-page-routing.module';

import { ResultFeedPagePage } from './result-feed-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultFeedPagePageRoutingModule
  ],
  declarations: [ResultFeedPagePage]
})
export class ResultFeedPagePageModule {}
