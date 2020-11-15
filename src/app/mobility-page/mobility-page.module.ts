import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MobilityPagePageRoutingModule } from './mobility-page-routing.module';

import { MobilityPagePage } from './mobility-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MobilityPagePageRoutingModule
  ],
  declarations: [MobilityPagePage]
})
export class MobilityPagePageModule {}
