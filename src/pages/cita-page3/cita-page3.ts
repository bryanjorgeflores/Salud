import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cita } from '../../interfaces/citas';

/**
 * Generated class for the CitaPage3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cita-page3',
  templateUrl: 'cita-page3.html',
})
export class CitaPage3Page {
  citas : Cita[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let cita1: Cita ={
      nombre: 'Cita 1',
      fecha: '19-02-2019'
    };
    let cita2: Cita ={
      nombre: 'Cita 2',
      fecha: '19-02-2019'
    };
    let cita3: Cita ={
      nombre: 'Cita 3',
      fecha: '19-02-2019'
    };
    this.citas = [cita1,cita2,cita3];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CitaPage3Page');
  }

}
