import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DishGroupIndexPage } from './dish-group-index';

@NgModule({
  declarations: [
    DishGroupIndexPage,
  ],
  imports: [
    IonicPageModule.forChild(DishGroupIndexPage),
  ],
  exports: [
    DishGroupIndexPage
  ]
})
export class CommendDishPageModule {}
