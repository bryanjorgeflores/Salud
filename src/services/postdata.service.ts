import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { URL } from "../personalized/config/variables.config";
import { Paciente } from "../interfaces/pacientes";

@Injectable()

export class PostDataService {
  constructor(
    public http: HttpClient,

  ) { }

  postPaciente(paciente: any): Observable<any> {
    return this.http.post(`${URL}/paciente`, paciente);
  }
  postCitasVacia(idPaciente: string): Observable<any> {
    return this.http.post(`${URL}/citas/${idPaciente}`, []);
  }
}