import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite'
/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {

  instance : SQLiteObject;
  ready : Promise<void>;

  constructor(private sqlite: SQLite) {
    this.ready = this.sqlite.create({
      name: 'data.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      console.log("Database created");
      this.instance = db;
        db.executeSql('create table IF NOT EXISTS users(userId INTEGER PRIMARY KEY, name VARCHAR(32), pincode VARCHAR(32))', {})
          .catch(e => console.log(e));
      })
      .then(() => {
        console.log("Tables created");
          this.instance.executeSql('select userId from users', []) .then((data) => {
            console.log("Populating table if necessary...");
            if(data.rows.length <= 0) {
              console.log("No data in user table, inserting record");
              this.instance.executeSql('INSERT INTO USERS (name, pincode) values ("BVG", "1234")', []);
              this.instance.executeSql('INSERT INTO USERS (name, pincode) values ("DRT", "2222")', []);
              this.instance.executeSql('INSERT INTO USERS (name, pincode) values ("TRG", "3333")', []);
              this.instance.executeSql('INSERT INTO USERS (name, pincode) values ("EDK", "4444")', []);
            }
          });
        }
      )
      .catch(e => console.log('Error Creating DB : ' + e));
  }
}
