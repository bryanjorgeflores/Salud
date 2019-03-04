import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OpenNamesPage } from './open-names';

@NgModule({
  declarations: [
    OpenNamesPage,
  ],
  imports: [
    IonicPageModule.forChild(OpenNamesPage),
  ],
})
export class OpenNamesPageModule {}
