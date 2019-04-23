import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cita } from '../../../interfaces/models/cita.model';
import { ValueGlobal } from '../../../personalized/global.personalized';
import { OrientationPersonalized } from '../../../personalized/orientation.personalized';

/**
 * Generated class for the PosteriorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-posterior',
  templateUrl: 'posterior.html',
})
export class PosteriorPage {
  citasPosteriores: Array<Cita>;
  fechaHoy: number = Date.now();

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public valueGlobal: ValueGlobal,
    private orientationPersonalized: OrientationPersonalized,

    ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PosteriorPage');
  }

  ngOnInit() {
    this.orientationPersonalized.orientationPortrait();
    this.citasPosteriores = this.valueGlobal.citasPosteriores;
  }

}
