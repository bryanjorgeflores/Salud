import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Paciente } from '../../../interfaces/models/paciente.model';
import { AlertPersonalized } from '../../../personalized/alert.personalized';
import { ValueGlobal } from '../../../personalized/global.personalized';
import { CitasPage } from '../../citas/citas';
import { GetDataService } from '../../../services/getdata.service';
import { Cita } from '../../../interfaces/models/cita.model';

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
  pacientes: Array<Paciente>;

  fechaHoy: number = Date.now();

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private alertPersonalized: AlertPersonalized,
    public valueGlobal: ValueGlobal,
    public getDataService: GetDataService,

    ) { }

  ngOnInit() {
  }

  ionViewDidLoad() {
    this.pacientes = this.valueGlobal.pacientes;
  }

  goToCitas(paciente: Paciente): void {
    localStorage.setItem('paciente', JSON.stringify(paciente));

    this.alertPersonalized.simpleLoading(
      `Cargando datos de ${paciente.nombres}`,
      1000
    );

    this.getDataService.getCitasByPaciente(paciente._id)
      .subscribe(
        (citas: Array<Cita>) => {
          this.valueGlobal.setCitasGlobalByPaciente(citas);
          this.navCtrl.push(CitasPage);
        },
        (err: Error) => {
          console.error(err);
        }
      );
  }


}
