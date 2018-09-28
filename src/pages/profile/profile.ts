import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { FileChooser } from '@ionic-native/file-chooser';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  comments: any = [];
  newcomment = { comment: '' }; 

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiProvider: ApiProvider,
    private fileChooser: FileChooser, public platform: Platform) {
    this.getTestComments();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  getTestComments(){
    this.apiProvider.getTestComment()
    .then(data => {
      console.log("getting here"); 
      this.comments = data['comment'];
      console.log(this.comments); 
    }); 
  }

  saveComment(){
    this.apiProvider.saveComment(this.newcomment).then((result) => {
      console.log(result);
      this.getTestComments();
      this.newcomment = { comment : ''};
    }, (err) => {
      console.log(err);
    });
  }

  chooseFile(){
    if(this.platform.is('android')){
      this.fileChooser.open()
      .then(uri => console.log(uri)) 
      .catch(e => console.log(e));
    }
  }
}
 