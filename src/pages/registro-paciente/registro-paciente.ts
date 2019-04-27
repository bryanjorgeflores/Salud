import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Paciente } from '../../interfaces/models/paciente.model';
import { Cita } from '../../interfaces/models/cita.model';

import { ValueGlobal } from '../../personalized/global.personalized';
import { AlertPersonalized } from '../../personalized/alert.personalized';

import { GetDataService } from '../../services/getdata.service';
import { CitasPage } from '../citas/citas';
import { PostDataService } from '../../services/postdata.service';
import { OrientationPersonalized } from '../../personalized/orientation.personalized';


@IonicPage()
@Component({
  selector: 'page-registro-paciente',
  templateUrl: 'registro-paciente.html',
})

export class RegistroPacientePage {
  nombresPaciente: string = '';
  dniPaciente: string = '';
  telefonoPaciente: string = '';
  tipoPaciente: string = '';
  fechaHoy: number = Date.now();
  
  paciente: Paciente = {
    dni: '',
    nombres: '',
    edad: 0,
    telefono: '',
    tipo: localStorage.getItem('tipopaciente'),
    fecharegistro: new Date(this.fechaHoy).toISOString().slice(0, -8),
    fechaprimaria: '',
    recurrencia: 1,
    sucursal: localStorage.getItem('idsucursal'),
    ultimodoctor: localStorage.getItem('iddoctor'),
    citaproxima: new Date(this.fechaHoy + 2592e6).toISOString().slice(0, -8),
  };
  
  
  selectOptions = {
    title: 'Tipo de Trato',
    subTitle: 'Seleccione el Tipo de Dato'
  };

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private getDataService: GetDataService,
    private orientationPersonalized: OrientationPersonalized,
    private postDataService: PostDataService,
    public valueGlobal: ValueGlobal,
    private alertPersonalized: AlertPersonalized,

  ) { }

  ionViewDidLoad() { 
   
  }

  ngOnInit() {
    this.orientationPersonalized.orientationPortrait();
    this.tipoPaciente = localStorage.getItem('tipopaciente');

  }
  
  presentLoading(): void {
    this.alertPersonalized.customLoading(
      'crescent',
      1000,
      'Obteniento datos...',
      true,
      'custom-class custom-loading'
    )
  }
  toastPaciente(): void {
    this.alertPersonalized.toastDegradable(
      'Paciente Encontrado, redirigiendo a las Citas',
      2000
    );
  }  
  loadingCitas(nombrePaciente: string): void {
    this.alertPersonalized.simpleLoading(
      `Cargando Datos de ${nombrePaciente}`,
      2000
    );
  }


  getPaciente(): void {
    this.presentLoading();
    this.getDataService.getPacientesByDNI(this.paciente.dni)
      .subscribe(
        (paciente: Paciente) => {
          if (paciente) {
            this.toastPaciente();
            this.navCtrl.push(CitasPage);
          }
          this.getDataService.getDNI(this.paciente.dni)
            .subscribe(
              (persona: any) => {
                this.paciente.nombres = persona.nombres;
              },
              (err: Error) => {
                console.error(err);
              }
            );
        },
        (err: Error) => {
          console.error(err);
        }
      );
  }

  registrarPaciente() {
    this.loadingCitas(this.paciente.nombres);

    this.paciente.fechaprimaria = +new Date(this.paciente.fechaprimaria);
    this.paciente.fecharegistro = +new Date(this.paciente.fecharegistro);
    this.paciente.citaproxima = +new Date(this.paciente.citaproxima);

    localStorage.setItem('paciente', JSON.stringify(this.paciente));

    this.postDataService.postPaciente(this.paciente)
      .subscribe(
        (idPaciente: string) => {
          localStorage.setItem('idpaciente', idPaciente);
          this.getDataService.getCitasByPaciente(idPaciente)
            .subscribe(
              (citas: Array<Cita>) => {
                this.loadingCitas(this.paciente.nombres);
                this.valueGlobal.setCitasGlobalByPaciente(citas);

                this.navCtrl.push(CitasPage);
              }
            );
        }
      );
  }

}
