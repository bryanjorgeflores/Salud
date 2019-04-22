import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ValueGlobal } from '../../../personalized/global.personalized';
import { AlertPersonalized } from '../../../personalized/alert.personalized';
import { Paciente } from '../../../interfaces/models/paciente.model';
import { CitasPage } from '../../citas/citas';

/**
 * Generated class for the RetrasoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-retraso',
  templateUrl: 'retraso.html',
})
export class RetrasoPage {
  pacientesRetrasoOrden: Array<Paciente>;

  fechaHoy: number = Date.now();

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public valueGlobal: ValueGlobal,
    private alertPersonalized: AlertPersonalized,

    ) { }

  ionViewDidLoad() {
    this.pacientesRetrasoOrden = this.valueGlobal.pacientesRetrasoOrden;  
  }

  ngOnInit() {

  }

  goToCitas(paciente: Paciente) {
    localStorage.setItem('paciente', JSON.stringify(paciente));

    this.alertPersonalized.simpleLoading(
      `Cargando datos de ${paciente.nombres}`,
      1000
    );

    this.valueGlobal.getCitasByPaciente(paciente._id)
      .then(() => this.navCtrl.setRoot(CitasPage))
      .catch(err => console.error(err));
  }


}
