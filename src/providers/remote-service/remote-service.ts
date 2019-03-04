import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Body } from '@angular/http/src/body';
import { NavParams } from 'ionic-angular';
/*
  Generated class for the RemoteServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RemoteServiceProvider {
  
  private url: string = "http://aplicaciones007.jne.gob.pe/srop_publico/consulta/afiliado/GetNombresCiudadano?DNI=70242188";
  constructor(private http: Http) {
    console.log('Hello RemoteServiceProvider Provider');
  }
  obtenerNombre(){
    return this.http.get(this.url)
    .do((res:Response)=> console.log(res))
    .map((res:Response)=> res.text())
  }
}
