import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DishesNewPage } from './dishes-new';

@NgModule({
  declarations: [
    DishesNewPage,
  ],
  imports: [
    IonicPageModule.forChild(DishesNewPage),
  ],
  exports: [
    DishesNewPage
  ]
})
export class DishesNewPageModule {}
