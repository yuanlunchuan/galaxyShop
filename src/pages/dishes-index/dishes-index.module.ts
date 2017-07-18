import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DishesIndexPage } from './dishes-index';

@NgModule({
  declarations: [
    DishesIndexPage,
  ],
  imports: [
    IonicPageModule.forChild(DishesIndexPage),
  ],
  exports: [
    DishesIndexPage
  ]
})
export class DishesIndexPageModule {}
