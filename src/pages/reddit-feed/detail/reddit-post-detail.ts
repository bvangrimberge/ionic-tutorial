import { Component } from "@angular/core";
import { NavParams, NavController } from "ionic-angular";

@Component({
    selector: "reddit-post-detail",
    templateUrl: "reddit-post-detail.html"
})

export class redditPostDetail {
    post : any;

    constructor(navCtrl : NavController, navParams : NavParams) {
        this.post = navParams.get('post').data;
    }
}