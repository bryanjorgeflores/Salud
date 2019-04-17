export interface Paciente {
  _id?: string,
  dni: string,
  nombres: string,
  edad?: number,
  telefono: string,
  tipo: string,
  fecharegistro?: number,
  fechaprimaria?: number,
  recurrencia?: number,
  sucursal: string,
  ultimodoctor: string,
  citaproxima?: any,
  citas: string
}