import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';


const { Browser } = Plugins;

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  constructor(public navCtrl: NavController, private router: Router, private menu: MenuController) { }

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
    this.menu.close();
    this.router.navigate(['/home']);
  }
  navTokushoho() {
    this.menu.close();
    this.router.navigate(['/tokushoho']);
  }

}
