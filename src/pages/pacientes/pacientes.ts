import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Page } from 'ionic-angular/umd/navigation/nav-util';
import { EsperaPage } from './espera/espera';
import { PersonalPage } from './personal/personal';
import { RetrasoPage } from './retraso/retraso';
import { GeneralPage } from './general/general';
import { ValueGlobal } from '../../personalized/global.personalized';
import { Paciente } from '../../interfaces/models/paciente.model';
import { AlertPersonalized } from '../../personalized/alert.personalized';
import { CitasPage } from '../citas/citas';

/**
 * Generated class for the PacientesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pacientes',
  templateUrl: 'pacientes.html',
})
export class PacientesPage {
  rootPage: Page = PacientesPage;
  personal: Page = PersonalPage;
  espera: Page =  EsperaPage;
  retraso: Page = RetrasoPage;
  general: Page = GeneralPage;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    ) {
  }

  ionViewDidLoad() {
  }
}
