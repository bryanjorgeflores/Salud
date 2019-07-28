import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';

import { GetDataService } from '../../services/getdata.service';

import { AlertPersonalized } from '../../personalized/alert.personalized';
import { OrientationPersonalized } from '../../personalized/orientation.personalized';
import { ValueGlobal } from '../../personalized/global.personalized';
import { PacientesPage } from '../pacientes/pacientes';
import { Paciente } from '../../interfaces/models/paciente.model';
import { FilterData } from '../../personalized/filter.data.personalized';
import { RegistroPacientePage } from '../registro-paciente/registro-paciente';
import { MenuController } from 'ionic-angular/components/app/menu-controller';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  idSucursal: string = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private menuCtrl: MenuController,
    private alertPersonalized: AlertPersonalized,
    public getDataService: GetDataService,
    public orientationPersonalized: OrientationPersonalized,
    public valueGlobal: ValueGlobal,
    public filterData: FilterData,

    ) { }

  ngOnInit() {
    if (!localStorage.getItem('doctor') || !localStorage.getItem('idsucursal')) {
      this.navCtrl.setRoot(LoginPage);
      return;
    }

    this.orientationPersonalized.orientationPortrait();

    this.idSucursal = localStorage.getItem('idsucursal');
  }

  goToPacientes(tipoPaciente: string): void {
    localStorage.setItem('tipopaciente', tipoPaciente);
    this.alertPersonalized.customLoading(
      'crescent',
      2000,
      'Por favor espere',
      true,
      'custom-class custom-loading'
    );
    this.getDataService.getPacientesBySucursalAndType(this.idSucursal, tipoPaciente)
      .subscribe(
        (pacientes: Array<Paciente>) => {
          this.valueGlobal.setPacientesGlobalWithFilters(pacientes);
          this.navCtrl.setRoot(PacientesPage);
        },
        (err: Error) => {
          console.error(err);
        }
      );

  }

  goToRegistroPaciente(tipoPaciente: string): void {
    localStorage.setItem('tipopaciente', tipoPaciente);
    this.navCtrl.setRoot(RegistroPacientePage);
  }

  goToArchivos(): void {

  }

  goToMedicamentos(): void {

  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }
}
