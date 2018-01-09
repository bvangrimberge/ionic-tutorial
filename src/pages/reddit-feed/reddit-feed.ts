import {Component} from "@angular/core";
import { NavController } from "ionic-angular/navigation/nav-controller";
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import { redditPostDetail } from "./detail/reddit-post-detail";
import { LoadingController, ToastController } from "ionic-angular";


@Component({
    selector : "reddit-feed",
    templateUrl : "reddit-feed.html"
})

export class redditFeed {

    posts: any;

    constructor(public navCtrl: NavController, public http: Http,  LoadingCtrl: LoadingController, ToastCtrl:ToastController) {
        let loader = LoadingCtrl.create({
            content: 'Loading...please wait'
        });
        loader.present();

        
        //Simulating a bad url to trigger an error
        let url = (Math.random() > 0.5) ?'https://www.reddit.com/r/games/new/.json?limit=10': 'https://www.reddit.com/badurl';
        this.http.get(url).map(res => res.json()).subscribe(
            data => {
                this.posts = data.data.children;
                loader.dismiss();
            },
            err => {
                loader.dismiss();
                let toast = ToastCtrl.create({
                    message : "Failed to retrieve data from feed",
                    position: "top",
                    showCloseButton: true,
                    duration:10000
                });
                toast.present();
            }
        );
    }

    showPostDetail(post) {
        this.navCtrl.push(redditPostDetail, {
            post : post
        });
    }
}