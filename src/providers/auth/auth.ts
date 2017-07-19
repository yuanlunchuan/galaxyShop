import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { usercreds } from '../../models/interfaces/usercreds';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(public http: Http) {
    console.log('Hello AuthProvider Provider');
  }
  
  //此处完成登录逻辑
  login(credentials: usercreds) {
    var promise = new Promise((resolve, reject) => {
      resolve(true);
    })

    return promise;
  }
}
