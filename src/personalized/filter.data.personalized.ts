import { Injectable } from "@angular/core";
import { Paciente } from "../interfaces/models/paciente.model";
import { Cita } from "../interfaces/models/cita.model";

@Injectable() 

export class FilterData {
  sucursales: any[];
  doctoresTodo: any[];
  pacientesTodo: any[];
  unidadFechaDia: number = 86400000;

  constructor(

  ) {

  }

  
  // getPacientes
  getPacientesPersonal(pacientes: Array<Paciente>, idDoctor: string): Array<Paciente> {
    let pacientesPersonal = pacientes.filter((paciente: Paciente) => {

      return paciente.ultimodoctor == idDoctor;
    });

    return pacientesPersonal;
  }
  getPacientesEspera(pacientes: Array<Paciente>): Array<Paciente> {
    let fechaHoy: number = Date.now();

    let pacientesEspera = pacientes.filter((paciente: Paciente) => {
      return paciente.citaproxima >= fechaHoy;
    });

    return pacientesEspera;
  }
  getPacientesRetraso(pacientes: Array<Paciente>): Array<Paciente> {
    let fechaHoy: number = Date.now();

    let pacientesRetraso = pacientes.filter((paciente: Paciente) => {
      return paciente.citaproxima < fechaHoy;
    });
    
    return pacientesRetraso;
  }

  // Ordenador
  ordenarPacientesCreciente(pacientes: Array<Paciente>, propiedad: string): Array<Paciente> {
    pacientes.sort((pacienteActual: Paciente, pacienteEntrante: Paciente) => {
      return pacienteActual[propiedad] - pacienteEntrante[propiedad];
    });
    return pacientes;
  }

  ordenarPacientesDecreciente(pacientes: Array<Paciente>, propiedad: string): Array<Paciente> {
    pacientes.sort((pacienteActual: Paciente, pacienteEntrante: Paciente) => {
      return pacienteEntrante[propiedad] - pacienteActual[propiedad];
    });
    return pacientes;
  }

  // Pacientes Orden
  getPacientesPersonalOrden(pacientes: Array<Paciente>, idDoctor: string): Array<Paciente> {
    let pacientesPersonal = this.getPacientesPersonal(pacientes, idDoctor);

    this.ordenarPacientesCreciente(pacientesPersonal, 'citaproxima');

    return pacientesPersonal;
  }

  getPacientesEsperaOrden(pacientes: Array<Paciente>): Array<Paciente> {
    let pacientesEspera = this.getPacientesEspera(pacientes);

    this.ordenarPacientesCreciente(pacientesEspera, 'citaproxima');

    return pacientesEspera;
  }

  getPacientesRetrasoOrden(pacientes: Array<Paciente>): Array<Paciente> {
    let pacientesRetraso = this.getPacientesRetraso(pacientes);

    this.ordenarPacientesDecreciente(pacientesRetraso, 'citaproxima');

    return pacientesRetraso;
  }


  //citas
  getCitaProxima(citas: Array<Cita>) {
    let fechaHoy = Date.now();

    let citaProxima: Cita = citas.find((cita: Cita, index: number) => {
      localStorage.setItem('indexcitaproxima', index.toString());
      
      let diasDiferenciaCita = cita.fechaprogramada - fechaHoy;

      return diasDiferenciaCita >= -172800000 && diasDiferenciaCita <= 172800000;
    });

    if (!citaProxima) {
      citaProxima = {
        idpaciente: '',
        numero: 0,
        tratamiento: '',
        descripcion: '',
        estado: false,
        fechaprogramada: 0,
        fechaejecutada: 0,
        recurrencia: 0,
        tipocita: '',
        doctor: '',
        sucursal: ''
      };
    }
    console.log(citaProxima);
    return citaProxima;
  }

  getCitasPosteriores(citas: Array<Cita>): Array<Cita> {
    let fechaHoy = Date.now();

    let citasPosteriores: Array<Cita> = citas.filter((cita: Cita) => {
      let diasDiferenciaCita = cita.fechaprogramada - fechaHoy;

      return diasDiferenciaCita > 172800000;
    });

    return citasPosteriores;
  }
  getCitasAnteriores(citas: Array<Cita>): Array<Cita> {
    let fechaHoy = Date.now();

    let citasAnteriores: Array<Cita> = citas.filter((cita: Cita) => {
      let diasDiferenciaCita = cita.fechaprogramada - fechaHoy;

      return diasDiferenciaCita < -172800000;
    });

    return citasAnteriores;
  }

}