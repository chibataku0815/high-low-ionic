import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { TokushohoPage } from './tokushoho.page';

import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: TokushohoPage
      }
    ]),
    SharedModule
  ],
  declarations: [TokushohoPage]
})
export class TokushohoPageModule { }

