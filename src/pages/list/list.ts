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

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  idSucursal: string = '';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
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

  goToPacientes(tipoPaciente: string) {
    localStorage.setItem('tipopaciente', tipoPaciente);
    this.alertPersonalized.customLoading(
      'crescent',
      2000,
      'Por favor espere',
      true,
      'custom-class custom-loading'
    );
    this.getDataService.getPacientesBySucursalAndType(this.idSucursal, tipoPaciente).subscribe((pacientes: Array<Paciente>) => {
      this.valueGlobal.setPacientesGlobalWithFilters(pacientes);
      this.navCtrl.setRoot(PacientesPage);
    })
    
  }

}
