import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserComponent } from '../browser/browser.component';

@NgModule({
  declarations: [BrowserComponent],
  imports: [CommonModule],
  exports: [BrowserComponent],
})
export class SharedModule { }
