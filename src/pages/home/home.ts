import { ChatPage } from './../chat/chat';
import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  username: string = '';

  constructor(public navCtrl: NavController,
    private alertCtrl: AlertController) {

  }

  alert(title: string, message: string) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

  loginUser() {
    if (/^[a-zA-Z0-9]+$/.test(this.username)) {

      this.navCtrl.push(ChatPage,{
        username:this.username
      });
    } else {
      this.alert('Error', 'invalide Username');
    }
  }

}
