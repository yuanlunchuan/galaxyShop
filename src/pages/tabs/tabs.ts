import { Component } from '@angular/core';

import { ReportPage } from '../report/report';
import { MorePage } from '../more/more';
import { HomePage } from '../home/home';
import { DishesPage } from '../dishes/index'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = DishesPage;
  tab3Root = ReportPage;
  tab4Root = MorePage;

  constructor() {

  }
}
