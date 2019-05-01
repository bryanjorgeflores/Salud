import { Cita } from "../interfaces/models/cita.model";
import { diasFechasInfante , diasFechasGestante } from "../personalized/config/fecha.config";

let getCitasLocalesByTypePaciente = (tipoPaciente: string, fechaInicial: number): Array<Cita> => {
  let fechasCitas = [];

  if (tipoPaciente === 'infante') {
    fechasCitas = diasFechasInfante;
  } else {
    fechasCitas = diasFechasGestante;
  }

  let citasLocalesByTypePaciente: Array<Cita> = fechasCitas.map((fechaCita, index) => {
    return { numero: index, fechaprogramada: fechaCita + fechaInicial, tratamiento: `Tratamiento ${index + 1}` };
  });
  return citasLocalesByTypePaciente;
}


let getAllCitas = (citasLocales: Array<Cita>, citasRegistradas: Array<Cita>): Array<Cita> => {
  for (let index = 0; index < citasRegistradas.length; index++) {
    citasLocales[citasRegistradas[index].numero] = citasRegistradas[index];
  }

  return citasLocales;
}

let getCitasPosteriores = (citas: Array<Cita>): Array<Cita> => {
  let citasPosteriores: Array<Cita> = citas.filter((cita: Cita) => {
    let diasDiferencia = cita.fechaprogramada - Date.now();

    return diasDiferencia > 1728e5;
  });

  return citasPosteriores;
}

let getCitasAnteriores = (citas: Array<Cita>): Array<Cita> => {
  let citasAnteriores: Array<Cita> = citas.filter((cita: Cita) => {
    let diasDiferenciaCita = cita.fechaprogramada - Date.now();

    return cita.estado === true || diasDiferenciaCita < -1728e5;
  });

  return citasAnteriores;
}

let getCitaProxima = (citasRegistradas: Array<Cita>, citasLocales: Array<Cita>): Cita => {
  
  if (citasRegistradas.length == 0) {
    let citaProxima: Cita = citasLocales.find((citaLocal: Cita) => {
      return citaLocal.fechaprogramada - Date.now() >= -1728e5;
    });

    if (!citaProxima) {
      return {
        numero: -1,
        tratamiento: '',
        fechaprogramada: Date.now()
      };
    }

    return citaProxima;
  }

  let indiceCitaProxima = citasRegistradas[citasRegistradas.length - 1].numero;

  if (indiceCitaProxima == citasLocales.length - 1) {
    return {
      numero: -1,
      tratamiento: '',
      fechaprogramada: Date.now()
    };
  }

  let citaProxima = citasLocales[+indiceCitaProxima + 1];
  return citaProxima;

}

export {
  getCitaProxima,
  getAllCitas,
  getCitasPosteriores,
  getCitasAnteriores,
  getCitasLocalesByTypePaciente,

}
