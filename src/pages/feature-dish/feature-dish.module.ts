import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FeatureDishPage } from './feature-dish';

@NgModule({
  declarations: [
    FeatureDishPage,
  ],
  imports: [
    IonicPageModule.forChild(FeatureDishPage),
  ],
  exports: [
    FeatureDishPage
  ]
})
export class FeatureDishPageModule {}
