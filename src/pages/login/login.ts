import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { Doctor } from '../../interfaces/models/doctor.model';
import { AlertPersonalized } from '../../personalized/alert.personalized';
import { GetDataService } from '../../services/getdata.service';
import { ValueGlobal } from '../../personalized/global.personalized';
import { OrientationPersonalized } from '../../personalized/orientation.personalized';
import { DatosPage } from '../datos/datos';
import { ListPage } from '../list/list';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  passwordDoctor: string = '';
  doctor: Doctor;
  dniDoctor: string = '';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public menuCtrl: MenuController,
    private alertPersonalized: AlertPersonalized,
    public getDataService: GetDataService,
    public orientationPersonalized: OrientationPersonalized,

    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  ngOnInit() {
    this.orientationPersonalized.orientationPortrait();
  }

  ionViewDidEnter() {
    this.orientationPersonalized.orientationPortrait();
  }

  ingresar() {
    this.getDataService.getDoctor(this.dniDoctor)
      .subscribe(
        (doctor: Doctor) => {
          console.log(doctor);

          if (doctor && this.passwordDoctor == doctor.password) {
            this.doctor = doctor;

            localStorage.setItem('doctor', JSON.stringify(this.doctor));
            localStorage.setItem('iddoctor', this.doctor._id);
            localStorage.setItem('idsucursal', this.doctor.sucursal);

            if (doctor.password == doctor.dni) {
              this.alertPersonalized.toastDegradable(
                'Usuario Nuevo Cambiar Datos Personales',
                3000
              );

              this.navCtrl.setRoot(DatosPage);

            } else {
              this.navCtrl.setRoot(ListPage);
            }
          } else {
            this.alertPersonalized.toastDegradable(
              'Datos mal Ingresados, Intente de Nuevo por Favor',
              2000
            );
          }
        }, 
        err => console.error(err)
      );
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }
}


