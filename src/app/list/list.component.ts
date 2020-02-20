import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';


const { Browser } = Plugins;

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  constructor(private router: Router, private menu: MenuController) { }

  ngOnInit() { }

  async openLogin() {
    await Browser.open({ url: 'https://highlow.com/login' });
  }
  async openAccount() {
    await Browser.open({ url: 'https://highlow.com/account' });
  }
  async openDemo() {
    await Browser.open({ url: 'https://demotrade.highlow.com/Trading' });
  }

  navHome() {
    this.router.navigate(['/home']);
    this.menu.close();
  }
  navTokushoho() {
    this.router.navigate(['/tokushoho']);
    this.menu.close();
  }

}
