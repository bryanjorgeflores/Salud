import { Component } from '@angular/core';
import { NavController, Platform, AlertController } from 'ionic-angular';
import { HerramientasPage } from '../herramientas/herramientas';
import { DatosPage } from '../datos/datos';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { PhonegapLocalNotification } from '@ionic-native/phonegap-local-notification';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  data = { title:'', description:'', date:'', time:'' };
  
  constructor(public navCtrl: NavController,
    public platform:Platform,
    public alertCtrl: AlertController,
    public localNotifications: LocalNotifications) 
    {}
  goToMenu() {
    this.navCtrl.push(DatosPage);
  }
  submit() {
    console.log(this.data);
    var date = new Date(this.data.date+" "+this.data.time);
    console.log(date);
    this.localNotifications.requestPermission().then((permission) => {
      this.localNotifications.schedule({
         id: 1,
         text: 'Pacientes pendientes',
         at: date,
         every: 'minute',
         led: 'FF0000',
         sound: this.setSound(),
      });
      let alert = this.alertCtrl.create({
        title: 'Felicidades!',
        subTitle: 'Se ha ingresado un nuevo paciente y se le notificara'+date,
        buttons: ['OK']
      });
      alert.present();
      this.data = { title:'', description:'', date:'', time:'' };
    });
  }

  setSound() {
    if (this.platform.is('android')) {
      return 'file://assets/sounds/Rooster.mp3'
    } else {
      return 'file://assets/sounds/Rooster.caf'
    }
  }

  notifica(){
    this.localNotifications.schedule({
      text: localStorage.getItem('localNotificationData'),
      at: new Date(new Date().getTime() + 3600),
      led: 'FF0000',
      sound: 'file://sound.mp3'
   });    
  }
}

export class InlinePage { }

