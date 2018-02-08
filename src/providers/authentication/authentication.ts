import { Injectable } from '@angular/core';
import { DatabaseProvider } from '../database/database';

/*
  Generated class for the AuthenticationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthenticationProvider {
  
  constructor(public db : DatabaseProvider) {
  }

  authenticate(id, pincode) {
    const AUTH_SELECT_USER_BY_ID = "select * from users u where u.userId = ? and u.pincode = ?";

    this.db.ready.then(() => {
      this.db.instance.executeSql(AUTH_SELECT_USER_BY_ID, [id, pincode]).then((data) => {
        return Promise.resolve(data.rows.length > 0);
      });
    });
  }

  selectUsers() {
    const AUTH_SELECT_USERS = "select * from users";
      var promise =  this.db.ready.then(() => {
        return this.db.instance.executeSql(AUTH_SELECT_USERS, []).then((data) => {
            console.log("transforming data...");
            let userValues = [];
            if (data.rows.length > 0) {
              for(let i=0; i <data.rows.length; i++) {
                userValues.push(data.rows.item(i));
              }
            }
            console.log("transformed data");
            console.log(userValues);
            return Promise.resolve(userValues);
          })
      }).catch(e => console.log(e));

      return promise;
  }
}
