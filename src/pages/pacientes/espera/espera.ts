import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Paciente } from '../../../interfaces/models/paciente.model';
import { ValueGlobal } from '../../../personalized/global.personalized';
import { AlertPersonalized } from '../../../personalized/alert.personalized';

/**
 * Generated class for the EsperaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-espera',
  templateUrl: 'espera.html',
})
export class EsperaPage {
  idSucursal: string = '';
  pacientesEsperaOrden: Array<Paciente>;
  tipoPaciente: string = '';

  fechaHoy: number = Date.now();
  factorDia: number = 86400000;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public valueGlobal: ValueGlobal,
    public alertPersonalized: AlertPersonalized,

    ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EsperaPage');
  }

  ngOnInit() {
    this.idSucursal = localStorage.getItem('idsucursal');
    this.tipoPaciente = localStorage.getItem('tipopaciente');

    this.pacientesEsperaOrden = this.valueGlobal.pacientesEsperaOrden;
    console.log(this.fechaHoy);
  }

  goToCitas(paciente: Paciente) {
    localStorage.setItem('paciente', JSON.stringify(paciente));

    this.valueGlobal.getCitasByPaciente(paciente.nombres, paciente._id, 1000);
  }

}
