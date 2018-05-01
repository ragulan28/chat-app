import { ChatPage } from './../pages/chat/chat';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

var config = {
  apiKey: "AIzaSyALQK9ZzmHJjnvHHMZKZQxXcGLTrOi5WTw",
  authDomain: "ionic-chat-starter-18855.firebaseapp.com",
  databaseURL: "https://ionic-chat-starter-18855.firebaseio.com",
  projectId: "ionic-chat-starter-18855",
  storageBucket: "ionic-chat-starter-18855.appspot.com",
  messagingSenderId: "246831630659"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChatPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
