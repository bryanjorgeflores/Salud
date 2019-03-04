import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CitaPage1Page } from '../cita-page1/cita-page1';
import { CitaPage2Page } from '../cita-page2/cita-page2';
import { CitaPage3Page } from '../cita-page3/cita-page3';

/**
 * Generated class for the CitasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-citas',
  templateUrl: 'citas.html',
})
export class CitasPage {
  tab1=CitaPage1Page;
  tab2=CitaPage2Page;
  tab3=CitaPage3Page;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CitasPage');
  }

}
