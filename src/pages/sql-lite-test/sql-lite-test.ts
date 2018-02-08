import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { SQLiteObject } from '@ionic-native/sqlite';
import { AuthenticationProvider } from '../../providers/authentication/authentication';

/**
 * Generated class for the SqlLiteTestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sql-lite-test',
  templateUrl: 'sql-lite-test.html',
})
export class SqlLiteTestPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, public auth : AuthenticationProvider) {

    /*
    this.db.ready
    .then(() => {
      console.log("SQL Test page : Database ready, checking number of users");
        this.db.instance.executeSql('SELECT * from USERS', []).then(
          (data) => {
          let userValues = [];
          if (data.rows.length > 0) {
            for(let i=0; i <data.rows.length; i++) {
              console.log("User found : " + data.rows.item(i).name);
              console.log("User found : " + data.rows.item(i).pincode);
              userValues.push(data.rows.item(i).name);
            }
          }
      })
      .catch(e => console.log(e));
      }
    )*/
    this.testUsers();
  }


  users : any;
  testUsers() {
    console.log("testing user data...");
    this.auth.selectUsers().then((data) => {
      console.log("data received in component");
      this.users = data;
      console.log(this.users);
    });
  }
}
