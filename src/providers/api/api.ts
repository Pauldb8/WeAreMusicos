import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  apiUrl = 'http://api.wearemusicos.debuck.info:3000';

  constructor(public http: HttpClient)  {
  }

  getServices(){
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/services').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err); 
      });
    });
  }

  getTestComment(){
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/test_comment').subscribe(data => { 
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  saveComment(data){
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/test_comment', data)
        .subscribe(res => {
          resolve(res);
          this.getTestComment();
        }, (err) => {
          reject(err);
        });
    });
  }

}
