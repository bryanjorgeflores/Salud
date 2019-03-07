import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalleCitaPage } from './detalle-cita';

@NgModule({
  declarations: [
    DetalleCitaPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalleCitaPage),
  ],
})
export class DetalleCitaPageModule {}
