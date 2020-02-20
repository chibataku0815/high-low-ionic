import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { BrowserComponent } from '../browser/browser.component';
import { ListComponent } from '../list/list.component';

@NgModule({
  declarations: [BrowserComponent, ListComponent],
  imports: [CommonModule, IonicModule.forRoot()],
  exports: [BrowserComponent, ListComponent, IonicModule],
})
export class SharedModule { }
