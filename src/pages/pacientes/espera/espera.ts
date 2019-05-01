import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Paciente } from '../../../interfaces/models/paciente.model';
import { ValueGlobal } from '../../../personalized/global.personalized';
import { AlertPersonalized } from '../../../personalized/alert.personalized';
import { CitasPage } from '../../citas/citas';
import { GetDataService } from '../../../services/getdata.service';
import { Cita } from '../../../interfaces/models/cita.model';
import { getCitasLocalesByTypePaciente } from '../../../filters/cita.filter';

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
    public getDataService: GetDataService,

    ) { }

  ionViewDidLoad() {
    this.pacientesEsperaOrden = this.valueGlobal.pacientesEsperaOrden;
  }

  goToCitas(paciente: Paciente): void {
    
    localStorage.setItem('paciente', JSON.stringify(paciente));

    this.valueGlobal.citasLocales = getCitasLocalesByTypePaciente(paciente.tipo, +new Date(paciente.fechaprimaria));

    this.getDataService.getCitasByPaciente(paciente._id)
      .subscribe(
        (citas: any) => {
          this.alertPersonalized.simpleLoading(
            `Cargando datos de ${paciente.nombres}`,
            1000
          );
          localStorage.setItem('idcita', citas._id);
          localStorage.setItem('idpaciente', paciente._id);
          this.valueGlobal.setCitasGlobal(citas.sesiones);
          this.navCtrl.setRoot(CitasPage);
        },
        (err: Error) => {
          console.error(err);
        }
      );
  }


}
