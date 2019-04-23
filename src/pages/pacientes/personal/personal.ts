import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Paciente } from '../../../interfaces/models/paciente.model';
import { ValueGlobal } from '../../../personalized/global.personalized';
import { AlertPersonalized } from '../../../personalized/alert.personalized';
import { CitasPage } from '../../citas/citas';
import { GetDataService } from '../../../services/getdata.service';
import { Cita } from '../../../interfaces/models/cita.model';

@IonicPage()
@Component({
  selector: 'page-personal',
  templateUrl: 'personal.html',
})
export class PersonalPage {
  pacientesPersonalOrden: Array<Paciente>;
  
  fechaHoy: number = Date.now();

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public valueGlobal: ValueGlobal,
    private alertPersonalized: AlertPersonalized,
    public getDataService: GetDataService,

    ) { }

  ngOnInit() {
    
  }
  
  ionViewDidLoad() {
    this.pacientesPersonalOrden = this.valueGlobal.pacientesPersonalOrden;
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
