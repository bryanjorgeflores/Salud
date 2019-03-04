import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NuevoEmbarazoPage } from './nuevo-embarazo';

@NgModule({
  declarations: [
    NuevoEmbarazoPage,
  ],
  imports: [
    IonicPageModule.forChild(NuevoEmbarazoPage),
  ],
})
export class NuevoEmbarazoPageModule {}
