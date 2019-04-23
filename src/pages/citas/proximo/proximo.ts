import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ValueGlobal } from '../../../personalized/global.personalized';
import { OrientationPersonalized } from '../../../personalized/orientation.personalized';
import { Cita } from '../../../interfaces/models/cita.model';
import { Paciente } from '../../../interfaces/models/paciente.model';
import { Doctor } from '../../../interfaces/models/doctor.model';

/**
 * Generated class for the ProximoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-proximo',
  templateUrl: 'proximo.html',
})
export class ProximoPage {
  citaProxima: Cita;
  paciente: Paciente;
  doctor: Doctor;

  fechaHoy: number = Date.now();

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public valueGlobal: ValueGlobal,
    private orientationPersonalized: OrientationPersonalized,

    ) { }

  ionViewDidLoad() {
   
  }

  ngOnInit() {
    this.orientationPersonalized.orientationPortrait();
    this.paciente = JSON.parse(localStorage.getItem('paciente'));
    this.doctor = JSON.parse(localStorage.getItem('doctor'));
    this.citaProxima = this.valueGlobal.citaProxima;
  }

  registrarCita() {
    
    let indexCitaProxima = +localStorage.getItem('indexcitaproxima');
    console.log(indexCitaProxima);
    
    if (indexCitaProxima < this.valueGlobal.citas.length - 1) {
      let fechaProgramada = this.valueGlobal.citas[indexCitaProxima + 1].fechaprogramada;
      console.log(fechaProgramada);
    }
  }
}
