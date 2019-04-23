import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Page } from 'ionic-angular/umd/navigation/nav-util';
import { ProximoPage } from './proximo/proximo';
import { PosteriorPage } from './posterior/posterior';
import { AnteriorPage } from './anterior/anterior';
import { InformePage } from './informe/informe';

@IonicPage()
@Component({
  selector: 'page-citas',
  templateUrl: 'citas.html',
})
export class CitasPage {
  rootPage: Page = CitasPage;
  proximo: Page = ProximoPage;
  posterior: Page = PosteriorPage;
  anterior: Page = AnteriorPage;
  informe: Page = InformePage;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    
    ) { }

  ionViewDidLoad() {
  }

}
