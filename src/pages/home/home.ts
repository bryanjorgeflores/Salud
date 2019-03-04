import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HerramientasPage } from '../herramientas/herramientas';
import { DatosPage } from '../datos/datos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  
  constructor(public navCtrl: NavController) {
    
  }
  goToMenu() {
    this.navCtrl.push(DatosPage);
  }
}

export class InlinePage { }

