import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  constructor(public http: HttpClient) {
    console.log('Hello DataProvider Provider');
  }
 getCateogries(){
 return new Promise((resolve, reject) => {
  // let headers = new Headers();

  // headers.append('Content-Type', 'application/json');

  // headers.append('Authorization', this.securityToken);
  // let options = new RequestOptions({ headers: headers });

  this.http.get("https://5bcce576cf2e850013874767.mockapi.io/task/categories")
    .subscribe(res => {
      console.log(res);
      resolve(res);
    }, (err) => {
      console.log(err);
      
    });
});
 }

}
