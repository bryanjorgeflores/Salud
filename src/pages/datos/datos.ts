import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Doctor } from '../../interfaces/models/doctor.model';
import { Sucursal } from '../../interfaces/models/sucursal.model';
import { PutDataService } from '../../services/putdata.service';
import { GetDataService } from '../../services/getdata.service';
import { ValueGlobal } from '../../personalized/global.personalized';
import { AlertPersonalized } from '../../personalized/alert.personalized';
import { requisitosPassword } from '../../personalized/config/variables.config';
import { ListPage } from '../list/list';

/**
 * Generated class for the DatosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-datos',
  templateUrl: 'datos.html',
})
export class DatosPage {
  doctor: Doctor;

  sucursales: Array<Sucursal>;
  passwordRep: string = '';
  requisitos: Array<any>;

  cambiosDoctor: any = {
    nombres: '',
    telefono: '',
    password: '',
    sucursal: ''
  }

  constructor( 
    public navParams: NavParams, 
    public navCtrl: NavController,
    public putDataService: PutDataService,
    public getDataService: GetDataService,
    private alertPersonalized: AlertPersonalized,
    
    ) {
      this.getDataService.getSucursales()
        .subscribe(
          (sucursales: Array<Sucursal>) => {
            this.sucursales = sucursales;
          }, 
          err => console.log(err)
        );
  }
  
  ngOnInit() {
    this.getDataService.getSucursales()
      .subscribe(
        (sucursales: Array<Sucursal>) => {
          this.sucursales = sucursales;
        },
        err => console.error(err)
      );
    
    this.doctor = JSON.parse(localStorage.getItem('doctor'));

    this.cambiosDoctor.nombres = this.doctor.nombres;
    this.cambiosDoctor.telefono = this.doctor.telefono;
    this.cambiosDoctor.sucursal = this.doctor.sucursal;

    if (!this.cambiosDoctor.nombres) {
      this.getDataService.getDNI(this.doctor.dni)
        .subscribe(
          (persona: any) => {
            this.cambiosDoctor.nombres = persona.nombres;
          },
          err => console.error(err)
        );
    }

    this.requisitos = requisitosPassword(this.cambiosDoctor.password, this.passwordRep);

  }

  aplicarCambios() {
    this.requisitos = requisitosPassword(this.cambiosDoctor.password, this.passwordRep);

    let passwordRev = this.requisitos
      .findIndex(condicion => condicion.noCumple === true)

    if (passwordRev === -1) {
      this.doctor.nombres = this.cambiosDoctor.nombres;
      this.doctor.telefono = this.cambiosDoctor.telefono;
      this.doctor.password = this.cambiosDoctor.password;
      this.doctor.sucursal = this.cambiosDoctor.sucursal;

      localStorage.setItem('doctor', JSON.stringify(this.doctor));
      localStorage.setItem('idsucursal', this.cambiosDoctor.sucursal);

      this.putDataService.putDoctor(this.cambiosDoctor, this.doctor._id)
        .subscribe(
          () => {
            this.alertPersonalized.toastDegradable(
              'Cambios Realizados, Bienvenido al Sistema',
              3000
            );

            this.navCtrl.setRoot(ListPage);
          },
          err => {
            console.error(err);
            this.alertPersonalized.toastDegradable(
              'Error en el Cambio',
              2000
            );
          }
        );

    } else {
      this.alertPersonalized.toastDegradable(
        'Verificar Contraseña',
        2000
      );
    }
    
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CitaPage2Page');
  }

}
