import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { ApiProvider } from '../../providers/api/api';
import { ProfilePage } from '../profile/profile';
import { StatusBar } from '@ionic-native/status-bar';
import { SignInPage } from '../sign-in/sign-in';
import { CategoryPage } from '../category/category';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  services: any = [];

  recherche: any = "gone";

  constructor(public navCtrl: NavController, public httpClient: HttpClient,
  public apiProvider: ApiProvider, private statusBar: StatusBar) {
    this.getServices();
    console.log(this.services);
    statusBar.show();
  }

  getServices(){
    this.apiProvider.getServices().then(data => {
      this.services = data['services']
      console.log(this.services); 
    });  
  }
 
  openProfile(){
    this.navCtrl.push(CategoryPage) ;
  }

  login(){
    this.navCtrl.push(SignInPage); 
  } 

  ionViewDidLoad() {
    this.statusBar.show(); 
  }
  ShowHideSearch(){
    if(this.recherche == "gone"){
      this.recherche = "visible";
    }else{
      this.recherche = "gone";
    }
  }
}
  