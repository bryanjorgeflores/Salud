import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ValueGlobal } from '../../../personalized/global.personalized';
import { OrientationPersonalized } from '../../../personalized/orientation.personalized';
import { Cita } from '../../../interfaces/models/cita.model';
import { Paciente } from '../../../interfaces/models/paciente.model';
import { Doctor } from '../../../interfaces/models/doctor.model';
import { PutDataService } from '../../../services/putdata.service';
import { PacientesPage } from '../../pacientes/pacientes';

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

  idCita: string = '';
  indexCitaProxima: string = '';
  fechaHoy: number = Date.now();
  diferenciaTiempo: number = 0;
  estadoTiempo: string = '';
  colorCitaProxima: string = '';
  factorCitaProxima: number = 0;

  datosPacienteCita: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public valueGlobal: ValueGlobal,
    private orientationPersonalized: OrientationPersonalized,
    private putDataService: PutDataService,

    ) { }

  ionViewDidLoad() {
   
  }

  ngOnInit() {
    this.orientationPersonalized.orientationPortrait();
    this.paciente = JSON.parse(localStorage.getItem('paciente'));
    this.doctor = JSON.parse(localStorage.getItem('doctor'));
    this.citaProxima = this.valueGlobal.citaProxima;
    this.indexCitaProxima = localStorage.getItem('indexcitaproxima');
    this.idCita = localStorage.getItem('idcita');

    console.log(this.indexCitaProxima);

    this.diferenciaTiempo = this.citaProxima.fechaprogramada - this.fechaHoy;
    
    if (this.diferenciaTiempo > 0) {
      this.estadoTiempo = 'queda';
      this.colorCitaProxima = 'warning';
      this.factorCitaProxima = 86400000;
      
    } else {
      this.estadoTiempo = 'hace';
      this.colorCitaProxima = 'danger';
      this.factorCitaProxima = -86400000;
    }

  }

  registrarCita() {

    this.datosPacienteCita = {
      numero: this.citaProxima.numero,
      tratamiento: this.citaProxima.tratamiento,
      descripcion: this.citaProxima.descripcion,
      fechaprogramada: this.citaProxima.fechaprogramada,
      fechaejecutada: Date.now(),
      tipocita: 'normal',
      doctor: this.doctor._id,
      sucursal: localStorage.getItem('idsucursal'),
    }

    this.datosPacienteCita.estadopaciente = false;
    this.datosPacienteCita.idpaciente = this.paciente._id;

    let fechaProgramada: number = 0;

    if (this.citaProxima.numero < this.valueGlobal.citas.length - 1) {
      fechaProgramada = this.valueGlobal.citas[this.citaProxima.numero + 1].fechaprogramada;
      console.log(fechaProgramada);
      this.datosPacienteCita.estadopaciente = false;
    }

    this.datosPacienteCita.citaprogramada = fechaProgramada;

    this.putDataService.putCita(this.idCita, this.citaProxima.numero, this.datosPacienteCita)
      .subscribe(
        (idpaciente: string) => this.navCtrl.setRoot(PacientesPage),
        (err: Error) => console.error(err)
    );

  }
}
