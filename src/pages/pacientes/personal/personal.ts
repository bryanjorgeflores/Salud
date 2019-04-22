import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Paciente } from '../../../interfaces/models/paciente.model';
import { ValueGlobal } from '../../../personalized/global.personalized';
import { AlertPersonalized } from '../../../personalized/alert.personalized';
import { CitasPage } from '../../citas/citas';

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

    ) { }

  ngOnInit() {
    
  }
  
  ionViewDidLoad() {
    this.pacientesPersonalOrden = this.valueGlobal.pacientesPersonalOrden;
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
