import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'HomePage';
  tab2Root = 'DishesIndexPage';
  tab3Root = 'ReportPage';
  tab4Root = 'MorePage';

  constructor() {

  }
}
