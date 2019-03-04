import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Paciente } from '../../interfaces/pacientes';

/**
 * Generated class for the Page4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page4',
  templateUrl: 'page4.html',
})
export class Page4Page {
  pacientes : Paciente[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let paciente1: Paciente ={
      nombre: 'Paciente 1',
      fecha: '19-02-2019',
      celular: '930311107'
    };
    let paciente2: Paciente ={
      nombre: 'Paciente 2',
      fecha: '19-02-2019',
      celular: '921342556'
    };
    let paciente3: Paciente ={
      nombre: 'Paciente 3',
      fecha: '19-02-2019',
      celular: '910010203'
    };
    this.pacientes = [paciente1,paciente2,paciente3];
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page4Page');
  }

}
