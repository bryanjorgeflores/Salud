import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation/';
import { OrientationPersonalized } from '../../personalized/orientation.personalized';

/**
 * Generated class for the VacunasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vacunas',
  templateUrl: 'vacunas.html',
})
export class VacunasPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private orientationPersonalized: OrientationPersonalized,
    private screenOrientation: ScreenOrientation,

    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VacunasPage');
    console.log(this.screenOrientation.type); // logs the current orientation, example: 'landscape'
  }

  ngOnInit() {
    this.orientationPersonalized.orientationLandscape();
  }



}
