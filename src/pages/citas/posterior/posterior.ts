import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PosteriorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-posterior',
  templateUrl: 'posterior.html',
})
export class PosteriorPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PosteriorPage');
  }

}
