import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cita } from '../../interfaces/citas';
import { DetalleCitaPage } from '../detalle-cita/detalle-cita';

/**
 * Generated class for the CitaPage2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cita-page2',
  templateUrl: 'cita-page2.html',
})
export class CitaPage2Page {
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
    console.log('ionViewDidLoad CitaPage2Page');
  }

  goToDetalleCita() {
    this.navCtrl.push(DetalleCitaPage);
  }

}
