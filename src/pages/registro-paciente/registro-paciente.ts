import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RemoteServiceProvider } from '../../providers/remote-service/remote-service';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Observable } from 'rxjs/Observable';
import { OpenNamesPage } from '../open-names/open-names';
/**
 * Generated class for the RegistroPacientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro-paciente',
  templateUrl: 'registro-paciente.html',
})
export class RegistroPacientePage {
  url: string = "http://aplicaciones007.jne.gob.pe/srop_publico/consulta/afiliado/GetNombresCiudadano?DNI=";
  numDni: string = "";
  nombres: string = "";
  dni: string = "";
  musicAlertOpts: { title: string, subTitle: string };
  constructor(public navCtrl: NavController, public navParams: NavParams, private Remote:RemoteServiceProvider, private http:Http) {
    this.musicAlertOpts = {
      title: 'Tipo de Trato',
      subTitle: 'Seleccione el tipo de trato'
    };
  }

  ionViewDidLoad() {
    // this.proveedor.obtenerNombre()
    //    .subscribe(
    //     (data)=>{this.nombres = data;},
    //     (error)=>{console.log(error);}
    //    )
       
  }
  obtenerNombre(){
    return this.http.get(this.url+this.numDni)
    .do((res:Response)=> console.log(res))
    .map((res:Response)=> res.text())
    
  }
  getMessages(){
    this.obtenerNombre().subscribe(data => this.nombres=(data).replace(/[.*+?^${}()|[\]\\]/g,' '));
    this.numDni="";
  }
  
  public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }

}
