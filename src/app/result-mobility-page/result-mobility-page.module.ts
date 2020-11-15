import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultMobilityPagePageRoutingModule } from './result-mobility-page-routing.module';

import { ResultMobilityPagePage } from './result-mobility-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultMobilityPagePageRoutingModule
  ],
  declarations: [ResultMobilityPagePage]
})
export class ResultMobilityPagePageModule {}
