import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdviceFeedPagePageRoutingModule } from './advice-feed-page-routing.module';

import { AdviceFeedPagePage } from './advice-feed-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdviceFeedPagePageRoutingModule
  ],
  declarations: [AdviceFeedPagePage]
})
export class AdviceFeedPagePageModule {}
