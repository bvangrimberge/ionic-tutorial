import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { Toast } from 'ionic-angular/components/toast/toast';

/**
 * Generated class for the PincodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pincode',
  templateUrl: 'pincode.html',
})
export class PincodePage {

  codeInput: Array<Number> = [];

  correctCodes: Array<String> = ['1234', '9876', '1111', '2222', '3333', '4444', '5555', '6666', '7777', '8888', '9999'];

  triesLeft: number = 3;

  toast : Toast;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public loadingCtrl: LoadingController, public toastCtrl: ToastController) {
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  clickControlButton(action) {
    switch (action) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
        this.codeInput.push(action);
        if (this.codeInput.length == 4) {
          if (this.triesLeft <= 0) {
            this.showToast('You have been locked out for 1 minute. Please wait before trying again.')
          } else {
            let codeString = this.codeInput[0] + '' + this.codeInput[1] + '' + this.codeInput[2] + '' + this.codeInput[3];
            console.log('Validating code ' + codeString);
            let loader = this.loadingCtrl.create({
              content: "Logging in..."
            });
            loader.present();
            this.delay(3000).then(() => {
              loader.dismiss();
              if (this.correctCodes.indexOf(codeString) > -1) {
                this.showToast('Correct code. You are now authenticated.');
                this.triesLeft = 3;
              } else {
                this.triesLeft--;
                let message;
                if (this.triesLeft > 1) {
                  message = 'Incorrect code. You have ' + this.triesLeft + ' tries left';
                } else if (this.triesLeft == 1) {
                  message = 'Incorrect code. You have 1 try left';
                } else {
                  message = 'Incorrect code. Please wait 1 minute before trying again';
                  this.delay(60000).then(() => {
                    this.triesLeft = 1;
                    this.clickControlButton('reset');
                    this.showToast('You can try to login again.');
                  });
                }
                this.showToast(message);
              }
              this.clickControlButton('reset');
            });
          }
        }
        break;
      case 'reset':
        this.codeInput = Array<Number>();
        break;

      default:
        break;
    }
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  showToast(message) {
    try {
      this.toast.dismiss();
    } catch(e) {}

    this.toast = this.toastCtrl.create(
      {
        message: message,
        position: 'top',
        showCloseButton: true,
        closeButtonText: 'OK'
      }
    );
    this.toast.present();
  }

}
