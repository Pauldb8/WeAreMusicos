import { Component, Input } from '@angular/core';
import { ProfilePage } from '../../pages/profile/profile';
import { NavController } from 'ionic-angular';
import { SignInPage } from '../../pages/sign-in/sign-in';

/**
 * Generated class for the FooterToolbarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'footer-toolbar',
  templateUrl: 'footer-toolbar.html'
})
export class FooterToolbarComponent {

  @Input() page: string; 

  constructor(public navCtrl: NavController) {

  }

  openProfile(){
    this.navCtrl.push(ProfilePage);
  }

  seconnecter(){
    this.navCtrl.push(SignInPage); 
  } 

}
