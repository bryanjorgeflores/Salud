import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Paciente } from '../../../interfaces/models/paciente.model';
import { ValueGlobal } from '../../../personalized/global.personalized';
import { AlertPersonalized } from '../../../personalized/alert.personalized';
import { CitasPage } from '../../citas/citas';

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
  pacientesEsperaOrden: Array<Paciente>;

  fechaHoy: number = Date.now();

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public valueGlobal: ValueGlobal,
    public alertPersonalized: AlertPersonalized,

    ) { }

  ionViewDidLoad() {
    this.pacientesEsperaOrden = this.valueGlobal.pacientesEsperaOrden;
  }

  ionViewDidEnter() {
    
  }


  ngOnInit() {

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
