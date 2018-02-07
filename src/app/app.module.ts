import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http'
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SQLite } from '@ionic-native/sqlite';
import { IonicStorageModule } from '@ionic/storage';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { redditFeed } from '../pages/reddit-feed/reddit-feed';
import { redditPostDetail } from '../pages/reddit-feed/detail/reddit-post-detail';
import { CalendarPage } from '../pages/calendar/calendar';

import { NgCalendarModule  } from 'ionic2-calendar';
import { PincodePage } from '../pages/pincode/pincode';
import { DatabaseProvider } from '../providers/database/database';
import { SqlLiteTestPage } from '../pages/sql-lite-test/sql-lite-test';



@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    redditFeed,
    redditPostDetail,
    CalendarPage, 
    PincodePage,
    SqlLiteTestPage
  ],
  imports: [
    BrowserModule,
    NgCalendarModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    redditFeed,
    redditPostDetail,
    CalendarPage,
    PincodePage,
    SqlLiteTestPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SQLite,
    DatabaseProvider
  ]
})
export class AppModule {}
