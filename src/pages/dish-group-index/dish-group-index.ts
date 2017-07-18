import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController,ActionSheetController  } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-dish-group-index',
  templateUrl: 'dish-group-index.html',
})
export class DishGroupIndexPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public actionSheetCtrl: ActionSheetController) {
  }

  items = [
  "烧菜",
  "炒菜",
  "蒸菜",
  "凉拌菜",
  "烫菜"
  ];

  showAddDialog(){
    let prompt = this.alertCtrl.create({
      title: '分类名称',
      message: "请输入菜品的分类名称",
      inputs: [
        {
          name: 'title',
          placeholder: '分类名称'
        },
      ],
      buttons: [
        {
          text: '取消',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: '保存',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

  itemSelected(item: string) {
    let actionSheet = this.actionSheetCtrl.create({
      title: item,
      buttons: [
        {
          text: '编辑',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },{
          text: '删除',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: '确定',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DishGroupIndexPage');
  }

}
