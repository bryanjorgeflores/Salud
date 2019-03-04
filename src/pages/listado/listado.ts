import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HerramientasPage } from '../herramientas/herramientas';
import { RegistroPacientePage } from '../registro-paciente/registro-paciente';

/**
 * Generated class for the ListadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listado',
  templateUrl: 'listado.html',
})
export class ListadoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListadoPage');
  }

  goToArchivos() {
    this.navCtrl.push(HerramientasPage);
  }
  goToRegistrar() {
    this.navCtrl.push(RegistroPacientePage);
  }
}
