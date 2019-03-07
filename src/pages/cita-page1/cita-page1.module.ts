import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CitaPage1Page } from './cita-page1';

@NgModule({
  declarations: [
    CitaPage1Page,
  ],
  imports: [
    IonicPageModule.forChild(CitaPage1Page),
  ],
})
export class CitaPage1PageModule {}
