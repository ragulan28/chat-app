import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

/**
 * Generated class for the ChatPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
//@IonicPage()

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  username: string = '';
  message: string = '';
  s;
  messages: object[]=[];

  constructor(public navCtrl: NavController,
    private navParams: NavParams,
    public db: AngularFireDatabase) {
    console.log(this.navParams);
    this.username = this.navParams.get('username');
    this.s = this.db.list('/chat').subscribe(data => {
      //console.log(data);
      data.map(elem => {
        this.messages=data;
      })
    })
  }

  sendMessage() {
    this.db.list('/chat').push({
      username: this.username,
      message: this.message
    }).then(() => {

    }).catch(() => {

    });
    this.message='';

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

}
