import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Browser } = Plugins;
@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.scss'],
})
export class BrowserComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  async openLogin() {
    await Browser.open({ url: 'https://highlow.com/login' });
  }
}
