import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { DatosPage } from '../pages/datos/datos';
import { ListadoPage } from '../pages/listado/listado';
import { NotificacionPage } from '../pages/notificacion/notificacion';
import { Page1Page } from '../pages/page1/page1';
import { RegistroPacientePage } from '../pages/registro-paciente/registro-paciente';
import { HerramientasPage } from '../pages/herramientas/herramientas';
import { CitasPage } from '../pages/citas/citas';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = ListadoPage;

  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
    // used for an example of ngFor and navigation
    this.pages = [
      
      { title: 'Login', component: HomePage },
      { title: 'Listado', component: ListadoPage },
      { title: 'Perfil', component: DatosPage },
      { title: 'Notificaciones', component: NotificacionPage },
      { title: 'Registrar Paciente', component: RegistroPacientePage },
      { title: 'Archivos', component: HerramientasPage },
      { title: 'Citas', component: CitasPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  
    
  
}
