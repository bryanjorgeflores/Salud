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
import { Sucursal } from '../interfaces/models/sucursal.model';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = ListPage;

  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private getDataService: GetDataService,
    ) {
    this.initializeApp();
    // used for an example of ngFor and navigation
    this.pages = [
      
      { title: 'NotificacionesProbar', component: HomePage },
      { title: 'Login', component: LoginPage },
      { title: 'Listado', component: ListadoPage },
      { title: 'Home', component: ListPage }, 
      { title: 'Perfil', component: DatosPage },
      { title: 'Notificaciones', component: NotificacionPage },
      { title: 'Registrar Paciente', component: RegistroPacientePage },
      { title: 'Archivos', component: HerramientasPage },
      { title: 'Citas', component: CitasPage },
      { title: 'Vacuna', component: VacunasPage },
      { title: 'Pacientes', component: PacientesPage },


    ];

  }

  initializeApp() {
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
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  
    
  
}
