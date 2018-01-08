import {Component} from "@angular/core";
import { NavController } from "ionic-angular/navigation/nav-controller";
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Component({
    selector : "reddit-feed",
    templateUrl : "reddit-feed.html"
})

export class redditFeed {

    posts: any;

    constructor(public navCtrl: NavController, public http: Http) {
        this.http.get('https://www.reddit.com/r/games/new/.json?limit=10').map(res => res.json()).subscribe(
            data => {
                this.posts = data.data.children;
            },
            err => {
                console.log("Failed to retrieve reddit feed");
            }
        );
    }
}