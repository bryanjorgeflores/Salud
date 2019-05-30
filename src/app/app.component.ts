import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { DatosPage } from '../pages/datos/datos';
import { ListadoPage } from '../pages/listado/listado';
import { NotificacionPage } from '../pages/notificacion/notificacion';
import { RegistroPacientePage } from '../pages/registro-paciente/registro-paciente';
import { HerramientasPage } from '../pages/herramientas/herramientas';
import { CitasPage } from '../pages/citas/citas';
import { VacunasPage } from '../pages/vacunas/vacunas';
import { LoginPage } from '../pages/login/login';
import { ListPage } from '../pages/list/list';
import { PacientesPage } from '../pages/pacientes/pacientes';
import { GetDataService } from '../services/getdata.service';
import { Doctor } from '../interfaces/models/doctor.model';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = ListPage;
  pages: Array<{title: string, src:string, component: any}>;
  doctor: Doctor;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private getDataService: GetDataService
    ) {
    this.initializeApp();
    // used for an example of ngFor and navigation
    this.pages = [

      { title: 'Home', src:'assets/imgs_gcm/home-side.png', component: ListPage },
      { title: 'Notificaciones', src:'assets/imgs_gcm/notification-side.png', component: NotificacionPage },
      { title: 'Archivos', src:'assets/imgs_gcm/files-side.png', component: HerramientasPage },
      { title: 'Citas', src:'home', component: CitasPage },
      { title: 'Vacuna', src:'home', component: VacunasPage },
      { title: 'Pacientes', src:'home', component: PacientesPage },
      { title: 'NotificacionesProbar', src:'', component: HomePage },
      { title: 'Login', src:'home', component: LoginPage },
      { title: 'Listado', src:'home', component: ListadoPage },


    ];

  }

  initializeApp(): void {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.overlaysWebView(true);
      this.splashScreen.hide();
    });
    this.getDataService.getSucursales()
      .subscribe(
        () => {
        },
        (err: Error) => {
          console.error(err);
        }
      );
    this.doctor = JSON.parse(localStorage.getItem('doctor'));

    console.log(this.doctor);
  }

  openPage(page: any): void {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  goToDatos(): void {
    this.nav.setRoot(DatosPage);
  }

}
