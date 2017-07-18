import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommendDishPage } from './commend-dish';

@NgModule({
  declarations: [
    CommendDishPage,
  ],
  imports: [
    IonicPageModule.forChild(CommendDishPage),
  ],
  exports: [
    CommendDishPage
  ]
})
export class CommendDishPageModule {}
