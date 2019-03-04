import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistroPacientePage } from './registro-paciente';

@NgModule({
  declarations: [
    RegistroPacientePage,
  ],
  imports: [
    IonicPageModule.forChild(RegistroPacientePage),
  ],
})
export class RegistroPacientePageModule {}
