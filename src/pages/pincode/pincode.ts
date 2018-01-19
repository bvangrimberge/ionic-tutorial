import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public loadingCtrl: LoadingController) {
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
        console.log('Number clicked: ' + action)
        this.codeInput.push(action);
        if(this.codeInput.length == 4) {
          console.log('Logging in with code ' + this.codeInput[0] + '' + this.codeInput[1] + '' + this.codeInput[2] + '' + this.codeInput[3]);
          let loader = this.loadingCtrl.create({
            content: "Logging in..."
          });
          loader.present();
          this.delay(3000).then(()=>{
            loader.dismiss();
            this.clickControlButton('reset');
          });
        }
        break;
      case 'reset':
        console.log('Reset clicked: ' + action)
        this.codeInput = Array<Number>();
        break;
    
      default:
        break;
    }
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}
