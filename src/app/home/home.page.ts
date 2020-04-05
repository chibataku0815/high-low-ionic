import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Browser } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  constructor() {
    Browser.addListener('browserPageLoaded', () => {
      console.log('browserPageLoad event called');
    });
    Browser.addListener('browserFinished', () => {
      console.log('browserPageLoad event called');
    });
    Browser.prefetch({
      urls: ['https://highlow.com/register?a_aid=5d74a21062504']
    });
  }

  ngOnInit() {}
  // add back when alpha.4 is out
  async openAccount() {
    await Browser.open({
      url: 'https://highlow.com/register?a_aid=5d74a21062504'
    });
  }
}
