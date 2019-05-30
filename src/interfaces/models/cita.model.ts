export interface Cita {
  _id?: string;
  idpaciente?: string;
  numero: number;
  tratamiento: string;
  descripcion?: string;
  estado?: boolean;
  fechaprogramada: number;
  fechaejecutada?: number;
  recurrencia?: number;
  tipocita?: string;
  doctor?: string;
  sucursal?: string;
}