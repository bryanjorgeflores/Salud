import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Paciente } from '../../interfaces/pacientes';
import { Page1Page } from '../page1/page1';
import { Page2Page } from '../page2/page2';
import { Page3Page } from '../page3/page3';
import { Page4Page } from '../page4/page4';

/**
 * Generated class for the NotificacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notificacion',
  templateUrl: 'notificacion.html',
})

export class NotificacionPage {
  rootPage = NotificacionPage;
  tab1=Page1Page;
  tab2=Page2Page;
  tab3=Page3Page;
  tab4=Page4Page;
  isAndroid: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificacionPage');
  }

}

