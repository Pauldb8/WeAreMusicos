import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { StatusBar } from '@ionic-native/status-bar';
import { SignInEmailPage } from '../sign-in-email/sign-in-email';

/**
 * Generated class for the SignInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {

  //userData = { email: "test", username: "test", picture: "ok.jpg"};
  userData = null;
  constructor(public navCtrl: NavController, public navParams: NavParams, private facebook: Facebook,
  private statusBar: StatusBar) {
    statusBar.hide(); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignInPage');
  }

  ionViewWillLeave() {
    this.statusBar.show();
  }

  loginWithFB(){
    this.facebook.login(['email', 'public_profile']).then((response: FacebookLoginResponse) => {
      this.facebook.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(profile => {  
        this.userData = { email: profile['email'], first_name: profile['first_name'], 
          picture: profile['picture_large']['data']['url'], username: profile['name']};
      })
    }).catch((err) => {
      console.log(err);
    });
  }

  loginWithEmail(){
    this.navCtrl.push(SignInEmailPage);
  }

}
