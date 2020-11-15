import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultAccomodationPagePageRoutingModule } from './result-accomodation-page-routing.module';

import { ResultAccomodationPagePage } from './result-accomodation-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultAccomodationPagePageRoutingModule
  ],
  declarations: [ResultAccomodationPagePage]
})
export class ResultAccomodationPagePageModule {}
