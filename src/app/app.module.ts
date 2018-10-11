import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpClientModule } from '@angular/common/http';
import { ApiProvider } from '../providers/api/api';
import { ProfilePage } from '../pages/profile/profile';
import { FileChooser } from '@ionic-native/file-chooser';
import { Facebook } from '@ionic-native/facebook';
import { SignInPage } from '../pages/sign-in/sign-in';
import { FooterToolbarComponent } from '../components/footer-toolbar/footer-toolbar';
import { OfflineMenuComponent } from '../components/offline-menu/offline-menu'; 
import { CategoryPage } from '../pages/category/category';
import { GuitarPage } from '../pages/guitar/guitar';

@NgModule({
  // Add page here
  declarations: [
    MyApp, 
    HomePage,
    ProfilePage,
    SignInPage,
    FooterToolbarComponent,
    OfflineMenuComponent,  
    CategoryPage,
    Guita,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],

  //and here

  bootstrap: [IonicApp],
  entryComponents: [

    MyApp,
    HomePage,
    ProfilePage,
    SignInPage,
    CategoryPage,
    GuitarPage,
  
  ], 
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider,
    FileChooser,
    Facebook
  ]
})
export class AppModule {}
