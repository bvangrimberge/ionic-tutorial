import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { PincodePage } from '../pincode/pincode';
import { NavController } from 'ionic-angular/navigation/nav-controller';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(public modalCtrl : ModalController, public navCtrl : NavController) {
  }

  showPinCodePage() {
    this.navCtrl.push(PincodePage);
  }
}
