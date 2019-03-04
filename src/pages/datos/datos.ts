import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListadoPage } from '../listado/listado';

/**
 * Generated class for the DatosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-datos',
  templateUrl: 'datos.html',
})
export class DatosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goToMenu() {
    this.navCtrl.push(ListadoPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DatosPage');
  }

}
