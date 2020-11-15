import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccomodationPagePageRoutingModule } from './accomodation-page-routing.module';

import { AccomodationPagePage } from './accomodation-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccomodationPagePageRoutingModule
  ],
  declarations: [AccomodationPagePage]
})
export class AccomodationPagePageModule {}
