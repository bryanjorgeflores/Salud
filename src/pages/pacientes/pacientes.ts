import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Page } from 'ionic-angular/umd/navigation/nav-util';
import { EsperaPage } from './espera/espera';
import { PersonalPage } from './personal/personal';
import { RetrasoPage } from './retraso/retraso';
import { GeneralPage } from './general/general';

import { ValueGlobal } from '../../personalized/global.personalized';
import { OrientationPersonalized } from '../../personalized/orientation.personalized';
import { RegistroPacientePage } from '../registro-paciente/registro-paciente';


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
  
  countPacientesEspera: number = 0;
  countPacientesRetraso: number = 0;
  countPacientesPersonal: number = 0;
  countPacientesGeneral: number = 0;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public valueGlobal: ValueGlobal,
    private orientationPersonalized: OrientationPersonalized,

    ) {
  }

  ionViewDidLoad() {
    this.countPacientesEspera = this.valueGlobal.pacientesEsperaOrden.length;
    this.countPacientesRetraso = this.valueGlobal.pacientesRetrasoOrden.length;
    this.countPacientesPersonal = this.valueGlobal.pacientesPersonalOrden.length;
    this.countPacientesGeneral = this.valueGlobal.pacientes.length;
  }

  ngOnInit() {
    this.orientationPersonalized.orientationPortrait();
  }

  goToRegistroPaciente(): any {
    this.navCtrl.push(RegistroPacientePage);
  }
}
