import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {Camera} from '@ionic-native/camera';
import {File, FileEntry} from "@ionic-native/file";

@IonicPage()
@Component({
  selector: 'page-dishes-new',
  templateUrl: 'dishes-new.html',
})
export class DishesNewPage {

  public myPhoto: any;
  public myPhotoURL: any;
  public error: string;

  constructor(
    public navCtrl: NavController,
              private readonly camera: Camera,
              private readonly file: File) {
  }

  openDishGroupIndex(){
    this.navCtrl.push('DishGroupIndexPage', {
    });
  }

  takePhoto() {
      this.camera.getPicture({
        quality: 100,
        destinationType: this.camera.DestinationType.FILE_URI,
        sourceType: this.camera.PictureSourceType.CAMERA,
        encodingType: this.camera.EncodingType.PNG,
        saveToPhotoAlbum: true
      }).then(imageData => {
        this.myPhoto = imageData;
        //this.uploadPhoto(imageData);
      }, error => {
        this.error = JSON.stringify(error);
      });
    }

    selectPhoto(): void {
      this.camera.getPicture({
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        destinationType: this.camera.DestinationType.FILE_URI,
        quality: 100,
        encodingType: this.camera.EncodingType.PNG,
      }).then(imageData => {
        this.myPhoto = imageData;
        //this.uploadPhoto(imageData);
      }, error => {
        this.error = JSON.stringify(error);
      });
    }
}
