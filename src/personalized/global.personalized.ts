import { Injectable } from "@angular/core";
import { Paciente } from "../interfaces/models/paciente.model";
import { Cita } from "../interfaces/models/cita.model";
import { AlertPersonalized } from "./alert.personalized";
import { GetDataService } from "../services/getdata.service";
import { FilterData } from "./filter.data.personalized";
import { getCitaProxima, getAllCitas, getCitasAnteriores, getCitasPosteriores } from "../filters/cita.filter";

@Injectable()

export class ValueGlobal {

  public pacientes: Array<Paciente>;
  public pacientesOrden: Array<Paciente>;

  public pacientesVacuna: Array<Paciente>;
  public pacientesEmbarazo: Array<Paciente>;
  public pacientesCred: Array<Paciente>;

  //Para los filtros de paciente
  public pacientesPersonal: Array<Paciente>;
  public pacientesEspera: Array<Paciente>;
  public pacientesRetraso: Array<Paciente>;
  public pacientesPersonalOrden: Array<Paciente>;
  public pacientesEsperaOrden: Array<Paciente>;
  public pacientesRetrasoOrden: Array<Paciente>;

  public citas: Array<Cita>;
  public citasLocales: Array<Cita>;
  public citaProxima: Cita;
  public citasPosteriores: Array<Cita>;
  public citasAnteriores: Array<Cita>;


  constructor(
    public alertPersonalized: AlertPersonalized,
    public getDataService: GetDataService,
    public filterData: FilterData,
  ) { }



  async getPacientesBySucursalAndType(idSucursal: string, tipo: string) {
    this.getDataService
      .getPacientesBySucursalAndType(idSucursal, tipo).subscribe(
        (pacientes: Array<Paciente>) => {
          let idDoctor = localStorage.getItem('iddoctor');

          this.pacientes = pacientes;
          this.pacientesPersonalOrden = this.filterData.getPacientesPersonalOrden(pacientes, idDoctor);
          this.pacientesEsperaOrden = this.filterData.getPacientesEsperaOrden(pacientes);
          this.pacientesRetrasoOrden = this.filterData.getPacientesRetrasoOrden(pacientes);
        }, 
        (err) => {
          console.error(err);
        },
        () => {
          
        }
    );
  }

  async getCitasByPaciente(idPaciente: string) {    
    this.getDataService.getCitasByPaciente(idPaciente)
      .subscribe(
        (citas: Array<Cita>) => { 
          this.citas = citas;
          this.citaProxima = this.filterData.getCitaProxima(citas);
          this.citasAnteriores = this.filterData.getCitasAnteriores(citas);
          this.citasPosteriores = this.filterData.getCitasPosteriores(citas);

        },
        (err) => {
          console.error(err)
        },
        () => {

        }
    );
    
  }

  setPacientesGlobalWithFilters(pacientes: Array<Paciente>): void {
    let idDoctor = localStorage.getItem('iddoctor');
    this.pacientes = pacientes;
    this.pacientesEsperaOrden = this.filterData.getPacientesEsperaOrden(pacientes);
    this.pacientesEsperaOrden = this.filterData.getPacientesEsperaOrden(pacientes);
    this.pacientesPersonalOrden = this.filterData.getPacientesPersonalOrden(pacientes, idDoctor);
    this.pacientesRetrasoOrden = this.filterData.getPacientesRetrasoOrden(pacientes);
  }

  setCitasGlobalByPaciente(citas: Array<Cita>) {
    this.citas = citas;
    this.citaProxima = this.filterData.getCitaProxima(citas);
    this.citasAnteriores = this.filterData.getCitasAnteriores(citas);
    this.citasPosteriores = this.filterData.getCitasPosteriores(citas);
  }

  setCitasGlobal(citasRegistradas: Array<Cita>) {
    // this.citaProxima = getCitaProxima(citasRegistradas.length, this.citasLocales);

    this.citas = getAllCitas(this.citasLocales, citasRegistradas);

    this.citaProxima = getCitaProxima(citasRegistradas, this.citasLocales);
    
    this.citasAnteriores = getCitasAnteriores(this.citas);
    this.citasPosteriores = getCitasPosteriores(this.citas);
  }
  
}