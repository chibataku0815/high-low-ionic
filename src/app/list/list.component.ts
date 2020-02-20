import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Browser } = Plugins;

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  async openLogin() {
    await Browser.open({ url: 'https://highlow.com/register' });
  }

  async openAccount(item) {
    Browser.open({ url: 'https://highlow.com/register' });
  }

  async openDemo(item) {
    Browser.open({ url: 'https://demotrade.highlow.com/Trading' });
  }

}
