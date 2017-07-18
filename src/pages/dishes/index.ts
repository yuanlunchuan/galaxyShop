import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';

@Component({
  templateUrl: 'index.html'
})
export class DishesPage {

  constructor(public navCtrl: NavController, private app: App) {
  }

  openNewDishPage() {
    this.app.getRootNav().push("DishesNewPage", {
    });
  }
}
