import { NgModule, ErrorHandler } from '@angular/core';
import { IonicPageModule,IonicErrorHandler } from 'ionic-angular';
import { DishesNewPage } from './dishes-new';

import {Camera} from '@ionic-native/camera';
import {File} from "@ionic-native/file";

@NgModule({
  declarations: [
    DishesNewPage,
  ],
  imports: [
    IonicPageModule.forChild(DishesNewPage),
  ],
  exports: [
    DishesNewPage
  ],
  providers: [
    Camera,
    File,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class DishesNewPageModule {}
