import { Injectable } from "@angular/core";
import { Paciente } from "../interfaces/models/paciente.model";
import { Cita } from "../interfaces/models/cita.model";
import { AlertPersonalized } from "./alert.personalized";
import { GetDataService } from "../services/getdata.service";
import { FilterData } from "./filter.data.personalized";
import { NavController } from "ionic-angular";

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
        (pacientes: Array<any>) => {
          let idDoctor = localStorage.getItem('iddoctor');

          this.pacientes = pacientes;
          this.pacientesPersonalOrden = this.filterData.getPacientesPersonalOrden(pacientes, idDoctor);
          this.pacientesEsperaOrden = this.filterData.getPacientesEsperaOrden(pacientes);
          this.pacientesRetrasoOrden = this.filterData.getPacientesRetrasoOrden(pacientes);

        }, 
        (error) => {
          console.error(error);
        },
        () => {
        }
    );
  }

  getCitasByPaciente(nombresPaciente: string, idPaciente: string, duracion: number) {
    this.alertPersonalized.simpleLoading(
      `Cargando Datos de ${nombresPaciente}`,
      duracion
    );
    
    this.getDataService.getCitasByPaciente(idPaciente)
      .subscribe((citas: Array<Cita>) => {
        console.log('citas init');
        console.log(citas);
        
        this.citas = citas;
        console.log('this.citas init');
        console.log(this.citas);
        this.citaProxima = this.filterData.getCitaProxima(citas);
        console.log('init cita proxima');
        console.log(this.citaProxima);
        this.citasAnteriores = this.filterData.getCitasAnteriores(citas);
        this.citasPosteriores = this.filterData.getCitasPosteriores(citas);

      }
    );
    
  }
  
}