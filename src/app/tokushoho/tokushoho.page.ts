import { Component, OnInit } from '@angular/core';

import { Plugins } from '@capacitor/core';
const { Browser } = Plugins;

@Component({
  selector: 'app-tokushoho',
  templateUrl: 'tokushoho.page.html',
  styleUrls: ['tokushoho.page.scss'],
})
export class TokushohoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  async openAccount(item) {
    Browser.open({ url: 'https://highlow.com/register' });
  }

}
