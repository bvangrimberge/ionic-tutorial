import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { PincodePage } from '../pincode/pincode';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { AuthenticationProvider } from '../../providers/authentication/authentication';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(public modalCtrl : ModalController, public navCtrl : NavController, public auth: AuthenticationProvider) {
    this.loadUsers();
  }


  users : any;
  loadUsers() {
    console.log("testing user data...");
    this.auth.selectUsers().then((data) => {
      console.log("data received in component");
      this.users = data;
      console.log(this.users);
    });
  }

  showPinCodePage(userId) {
    this.navCtrl.push(PincodePage, {userId: userId});
  }
}
