import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http'; 

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { MyApp } from './app.component';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { PhonegapLocalNotification } from '@ionic-native/phonegap-local-notification';
import { ScreenOrientation } from '@ionic-native/screen-orientation/';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { MenuPage } from '../pages/menu/menu';
import { NuevoEmbarazoPage } from '../pages/nuevo-embarazo/nuevo-embarazo';
import { HerramientasPage } from '../pages/herramientas/herramientas';
import { DatosPage } from '../pages/datos/datos';
import { ListadoPage } from '../pages/listado/listado';
import { NotificacionPage } from '../pages/notificacion/notificacion';
import { Page1Page } from '../pages/page1/page1';
import { Page2Page } from '../pages/page2/page2';
import { Page3Page } from '../pages/page3/page3';
import { Page4Page } from '../pages/page4/page4';
import { RegistroPacientePage } from '../pages/registro-paciente/registro-paciente';
import { CitasPage } from '../pages/citas/citas';
import { CitaPage1Page } from '../pages/cita-page1/cita-page1';
import { CitaPage2Page } from '../pages/cita-page2/cita-page2';
import { CitaPage3Page } from '../pages/cita-page3/cita-page3';
import { DetalleCitaPage } from '../pages/detalle-cita/detalle-cita';
import { OpenNamesPage } from '../pages/open-names/open-names';
import { VacunasPage } from '../pages/vacunas/vacunas';

import { RemoteServiceProvider } from '../providers/remote-service/remote-service';

import { GetDataService } from '../services/getdata.service';
import { PutDataService } from '../services/putdata.service';
import { PostDataService } from '../services/postdata.service';

import { FilterData } from '../personalized/filter.data.personalized';
import { ValueGlobal } from '../personalized/global.personalized';
import { AlertPersonalized } from '../personalized/alert.personalized';
import { OrientationPersonalized } from '../personalized/orientation.personalized';
import { LoginPage } from '../pages/login/login';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    MenuPage,
    NuevoEmbarazoPage,
    HerramientasPage,
    DatosPage,
    ListadoPage,
    NotificacionPage,
    Page1Page,
    Page2Page,
    Page3Page,
    Page4Page,
    RegistroPacientePage,
    CitasPage,
    CitaPage1Page,
    CitaPage2Page,
    CitaPage3Page,
    DetalleCitaPage,
    OpenNamesPage,
    VacunasPage,
    LoginPage,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicImageViewerModule,
    IonicModule.forRoot(MyApp),

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MenuPage,
    HomePage,
    ListPage,
    NuevoEmbarazoPage,
    HerramientasPage,
    DatosPage,
    ListadoPage,
    NotificacionPage,
    Page1Page,
    Page2Page,
    Page3Page,
    Page4Page,
    RegistroPacientePage,
    CitasPage,
    CitaPage1Page,
    CitaPage2Page,
    CitaPage3Page,
    DetalleCitaPage,
    OpenNamesPage,
    VacunasPage,
    LoginPage,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RemoteServiceProvider,
    HttpClientModule,
    PhonegapLocalNotification,
    LocalNotifications,
    ScreenOrientation,
    AlertPersonalized,
    FilterData,
    ValueGlobal,
    GetDataService,
    PostDataService,
    PutDataService,
    OrientationPersonalized,

  ]
})
export class AppModule {}
