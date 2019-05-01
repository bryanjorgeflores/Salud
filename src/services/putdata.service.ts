import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { URL } from "../personalized/config/variables.config";
import { Cita } from "../interfaces/models/cita.model";

@Injectable()

export class PutDataService {
  constructor(
    public http: HttpClient
  ) {
  }
  putDoctor(doctor: any, id: string): Observable<any> {
    return this.http.put(`${URL}/doctor/${id}`, doctor);
  }
  putCita(id: string, index: number, datosPacienteCita: any): Observable<any> {
    return this.http.put(`${URL}/cita/${id}/${index}`, datosPacienteCita);
  }
  putCitaByPaciente(idPaciente: string, index: number, datosPacienteCita: any): Observable<any> {
    return this.http.put(`${URL}/paciente/citas/${idPaciente}/${index}`, datosPacienteCita);
  }
}