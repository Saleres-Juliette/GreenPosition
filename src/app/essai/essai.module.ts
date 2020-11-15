import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EssaiPageRoutingModule } from './essai-routing.module';

import { EssaiPage } from './essai.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EssaiPageRoutingModule
  ],
  declarations: [EssaiPage]
})
export class EssaiPageModule {}
