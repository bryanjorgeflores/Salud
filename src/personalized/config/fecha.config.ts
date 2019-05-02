import { Cita } from "../../interfaces/models/cita.model";

let passDateForInput = (numFecha: number): string =>  new Date(numFecha).toISOString().slice(0, -8);

let citasInputInfante: Array<Cita> = [
  { numero: 0, fechaprogramada: 0, tratamiento: 'Tratamiento 1' },         //0
  { numero: 1, fechaprogramada: 6048e5, tratamiento: 'Tratamiento 2' },    //7
  { numero: 2, fechaprogramada: 14688e5, tratamiento: 'Tratamiento 3' },   //17
  { numero: 3, fechaprogramada: 23328e5, tratamiento: 'Tratamiento 4' },   //27
  { numero: 4, fechaprogramada: 31968e5, tratamiento: 'Tratamiento 5' },   //37
  { numero: 5, fechaprogramada: 39744e5, tratamiento: 'Tratamiento 6' },   //46

];

let citasInputGestante: Array<Cita> = [
  { numero: 0, fechaprogramada: 0, tratamiento: 'Tratamiento 1' },         //0
  { numero: 1, fechaprogramada: 6912e5, tratamiento: 'Tratamiento 2' },    //8
  { numero: 2, fechaprogramada: 1296e6, tratamiento: 'Tratamiento 3' },    //15
  { numero: 3, fechaprogramada: 19872e5, tratamiento: 'Tratamiento 4' },   //23
  { numero: 4, fechaprogramada: 23328e5, tratamiento: 'Tratamiento 5' },   //30
  { numero: 5, fechaprogramada: 29376e5, tratamiento: 'Tratamiento 6' },   //34
  { numero: 6, fechaprogramada: 3456e6, tratamiento: 'Tratamiento 7' },    //40
  { numero: 7, fechaprogramada: 432e7, tratamiento: 'Tratamiento 8' },     //50

];


let diasFechasInfante: Array<number> = [
  // 0,            //fechainicial
  6048e5,       //7     
  14688e5,      //17
  23328e5,      //27
  31968e5,      //37
  39744e5,      //46

]

let diasFechasGestante: Array<number> = [
  // 0,            //fechainicial
  6912e5,       //8
  1296e6,       //15
  19872e5,      //23
  23328e5,      //30
  29376e5,      //34
  3456e6,       //40
  432e7,        //50

]



export {
  passDateForInput,
  diasFechasInfante,
  diasFechasGestante,

}

/*
let fechasEntrantes = [//insertar numeros ahi]
let fechasSalientes = fechasEntrantes.map((fechaEntrante) => fechaEntrante*864e5);
*/