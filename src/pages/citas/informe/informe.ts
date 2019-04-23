import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cita } from '../../../interfaces/models/cita.model';
import { OrientationPersonalized } from '../../../personalized/orientation.personalized';
import { ValueGlobal } from '../../../personalized/global.personalized';

/**
 * Generated class for the InformePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-informe',
  templateUrl: 'informe.html',
})
export class InformePage {
  citas: Array<Cita>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public valueGlobal: ValueGlobal,
    private orientationPersonalized: OrientationPersonalized,

    ) { }

  ionViewDidLoad() {
  }

  ngOnInit() {
    this.orientationPersonalized.orientationLandscape();
    this.citas = this.valueGlobal.citas;
  }

}
