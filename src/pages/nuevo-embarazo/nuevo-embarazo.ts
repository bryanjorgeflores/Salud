import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';


/**
 * Generated class for the NuevoEmbarazoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nuevo-embarazo',
  templateUrl: 'nuevo-embarazo.html',
})
export class NuevoEmbarazoPage {
  myForm: FormGroup;
  constructor(public navCtrl: NavController, public alerCtrl: AlertController, public navParams: NavParams, public formBuilder: FormBuilder) {
      this.myForm = this.createMyForm();
    }
    saveData(){
      console.log(this.myForm.value);
    }
    
    private createMyForm(){
      return this.formBuilder.group({
        name: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', Validators.required],
        dateBirth: ['', Validators.required],
        passwordRetry: this.formBuilder.group({
          password: ['', Validators.required],
          passwordConfirmation: ['', Validators.required]
        }),
        gender: ['', Validators.required],
      });
  }
  doAlert() {
    let alert = this.alerCtrl.create({
      title: 'Agregado con éxito',
      message: 'Acabas de agregar un nuevo registro',
      buttons: ['Ok']
    });
    alert.present()
  }  
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuevoEmbarazoPage');
  }

}
