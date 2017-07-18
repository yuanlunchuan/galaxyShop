import { Component } from '@angular/core';
import { NavController, AlertController, App } from 'ionic-angular';

@Component({
  selector: 'page-more',
  templateUrl: 'more.html'
})
export class MorePage {
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private app: App) {

  }

  openAccountPage(){
    this.app.getRootNav().push('AccountsPage');
  }

  openFeatureDishPage(){
    this.app.getRootNav().push('FeatureDishPage');
  }

  openCommendDishPage(){
    this.app.getRootNav().push('CommendDishPage');
  }

  openEditPasswordPage(){
    this.app.getRootNav().push('EditPasswordPage');
  }
}
