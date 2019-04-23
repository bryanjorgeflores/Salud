import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Paciente } from '../../../interfaces/models/paciente.model';
import { Cita } from '../../../interfaces/models/cita.model';
import { ValueGlobal } from '../../../personalized/global.personalized';
import { OrientationPersonalized } from '../../../personalized/orientation.personalized';

/**
 * Generated class for the AnteriorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-anterior',
  templateUrl: 'anterior.html',
})
export class AnteriorPage {
  paciente: Paciente;
  citasAnteriores: Array<Cita>;

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
    this.citasAnteriores = this.valueGlobal.citasAnteriores;
  }

}
