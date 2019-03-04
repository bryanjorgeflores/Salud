import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NuevoEmbarazoPage } from '../nuevo-embarazo/nuevo-embarazo';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goToMenu() {
    this.navCtrl.push(MenuPage);
  }
  goToNuevoEmbarazo() {
    this.navCtrl.push(NuevoEmbarazoPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }
  

}
