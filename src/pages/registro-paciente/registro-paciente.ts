import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CitasPage } from '../citas/citas';

import { Paciente } from '../../interfaces/models/paciente.model';
import { Cita } from '../../interfaces/models/cita.model';

import { GetDataService } from '../../services/getdata.service';
import { PostDataService } from '../../services/postdata.service';

import { ValueGlobal } from '../../personalized/global.personalized';
import { AlertPersonalized } from '../../personalized/alert.personalized';
import { OrientationPersonalized } from '../../personalized/orientation.personalized';
import { passDateForInput } from '../../personalized/config/fecha.config';
import { getCitasLocalesByTypePaciente } from '../../filters/cita.filter';




@IonicPage()
@Component({
  selector: 'page-registro-paciente',
  templateUrl: 'registro-paciente.html',
})

export class RegistroPacientePage {
  nombresPaciente: string = '';
  dniPaciente: string = '';
  telefonoPaciente: string = '';
  fechaHoy: number = Date.now();
  citasInput: any;

  
  paciente: Paciente = {
    dni: '',
    nombres: '',
    edad: 0,
    telefono: '',
    tipo: localStorage.getItem('tipopaciente'),
    fecharegistro: passDateForInput(this.fechaHoy - 18e6),
    fechaprimaria: '',
    estado: false,
    recurrencia: 1,
    sucursal: localStorage.getItem('idsucursal'),
    ultimodoctor: localStorage.getItem('iddoctor'),
    citaproxima: passDateForInput(this.fechaHoy),
  };
  
  selectOptions = {
    title: 'Tipo de Trato',
    subTitle: 'Seleccione el Tipo de Dato'
  };

  habilitadoRegistro: boolean = false;

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

  calcularCitaProxima(): void {
    let citaProxima: Cita;

    this.valueGlobal.citasLocales = getCitasLocalesByTypePaciente(this.paciente.tipo, +new Date(this.paciente.fechaprimaria));
  
    
    citaProxima = this.valueGlobal.citasLocales.find(
      (cita: Cita, index: number) => {
        localStorage.setItem('indexcitaproxima', index.toString());
        
        return cita.fechaprogramada - this.fechaHoy >= -1728e5;
      }
    );
    
    if (!citaProxima) {
      this.alertPersonalized.alertAccept(
        'Ninguna Cita',
        'No existe ninguna cita para ese paciente',
        ['Aceptar']
      );

      this.habilitadoRegistro = false;

      return;
    }

    this.paciente.citaproxima = citaProxima.fechaprogramada;
    this.habilitadoRegistro = true;
  }

  registrarPaciente(): void {
    this.loadingCitas(this.paciente.nombres);

    this.paciente.fechaprimaria = +new Date(this.paciente.fechaprimaria);
    this.paciente.fecharegistro = +new Date(this.paciente.fecharegistro);
    this.paciente.citaproxima = +new Date(this.paciente.citaproxima);

    localStorage.setItem('paciente', JSON.stringify(this.paciente));

    this.postDataService.postPaciente(this.paciente)
      .subscribe(
        (citas: any) => {
          localStorage.setItem('idcita', citas._id);
          localStorage.setItem('idpaciente', citas.paciente);
          localStorage.setItem('numsesiones', citas.sesiones.length.toString());
          this.valueGlobal.setCitasGlobal(citas.sesiones);
          this.navCtrl.push(CitasPage);
        }    
      );
  }

}
