import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-dishes-index',
  templateUrl: 'dishes-index.html',
})
export class DishesIndexPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DishesIndexPage');
  }
  openNewDishPage() {
    this.app.getRootNav().push("DishesNewPage", {
    });
  }
}
