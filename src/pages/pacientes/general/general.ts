import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Paciente } from '../../../interfaces/models/paciente.model';
import { AlertPersonalized } from '../../../personalized/alert.personalized';
import { ValueGlobal } from '../../../personalized/global.personalized';
import { CitasPage } from '../../citas/citas';

/**
 * Generated class for the GeneralPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-general',
  templateUrl: 'general.html',
})
export class GeneralPage {
  idSucursal: string = '';
  pacientes: Array<Paciente>;
  tipoPaciente: string = '';

  fechaHoy: number = Date.now();

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private alertPersonalized: AlertPersonalized,
    public valueGlobal: ValueGlobal,

    ) { }

  ngOnInit() {
  }

  ionViewDidLoad() {
    this.pacientes = this.valueGlobal.pacientes;
  }

  goToCitas(paciente: Paciente) {
    localStorage.setItem('paciente', JSON.stringify(paciente));

    this.alertPersonalized.simpleLoading(
      `Cargando Datos de ${paciente.nombres}`,
      1000
    );

    this.valueGlobal.getCitasByPaciente(paciente._id)
      .then(() => this.navCtrl.setRoot(CitasPage))
      .catch(err => console.error(err));
  }

}
