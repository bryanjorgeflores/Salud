import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { URL } from "../personalized/config/variables.config";

import { Sucursal } from "../interfaces/models/sucursal.model";
import { Doctor } from "../interfaces/models/doctor.model";
import { Paciente } from "../interfaces/models/paciente.model";
import { Cita } from "../interfaces/models/cita.model";

@Injectable()

export class GetDataService {
  constructor(
    public http: HttpClient,

  ) { }

  //Sucursales
  getSucursales(): Observable<Array<Sucursal>> {
    return this.http.get<Array<Sucursal>>(`${URL}/sucursales`);
  }

  //Doctores
  getDoctoresBySucursal(idSucursal: string): Observable<Array<Doctor>> {
    return this.http.get<Array<Doctor>>(`${URL}/pacientes/${idSucursal}`);
  }
  getDoctor(dni: string): Observable<Doctor> {
    return this.http.get<Doctor>(`${URL}/doctor/${dni}`);
  }

  //Pacientes
  getPacientesBySucursal(idSucursal: string): Observable<Array<Paciente>> {
    return this.http.get<Array<Paciente>>(`${URL}/pacientes/${idSucursal}`);
  }
  getPacientesBySucursalAndType(idSucursal: string, tipo: string): Observable<Array<Paciente>> {
    return this.http.get<Array<Paciente>>(`${URL}/pacientes/${idSucursal}/${tipo}`);
  }
  getPaciente(id: string): Observable<Paciente> {
    return this.http.get<Paciente>(`${URL}/paciente/${id}`);
  }
  getPacientesByDNI(dni: string): Observable<Paciente> {
    return this.http.get<Paciente>(`${URL}/paciente/dni/${dni}`);
  }

  //Citas
  getCitas(id: string): Observable<Array<any>> {
    return this.http.get<Array<any>>(`${URL}/citas/${id}`);
  }
  getCitasByPaciente(idPaciente: string): Observable<Array<any>> {
    return this.http.get<Array<any>>(`${URL}/paciente/citas/${idPaciente}`);
  }
  getCita(id: string, index: number): Observable<Cita> {
    return this.http.get<Cita>(`${URL}/cita/${id}/${index}`);
  }

  //DNI
  getDNI(dni: string): Observable<Object>{
    return this.http.get<Object>(`${URL}/dni/${dni}`);
  }
}