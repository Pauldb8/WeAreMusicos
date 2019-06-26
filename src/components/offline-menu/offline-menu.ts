import { Component } from '@angular/core';
import { CategoryPage } from '../../pages/category/category';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the OfflineMenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular 
 * Components.
 */
@Component({
  selector: 'offline-menu',
  templateUrl: 'offline-menu.html' 
})
export class OfflineMenuComponent {

  constructor(public navCtrl: NavController) {
  }

  openCategory(){
    this.navCtrl.push(CategoryPage) ;
  }
 
}
