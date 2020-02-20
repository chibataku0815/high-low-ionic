import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserComponent } from '../browser/browser.component';
import { ListComponent } from '../list/list.component';

@NgModule({
  declarations: [BrowserComponent, ListComponent],
  imports: [CommonModule],
  exports: [BrowserComponent, ListComponent],
})
export class SharedModule { }
