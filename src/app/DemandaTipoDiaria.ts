export interface DemandaTipoDiaria {
  Nombre: string;
  Resolucion: string;
  TipoGrafico: string;
  Variables: Variable[];
}

export interface Datos {
  Nombre: string;
  Id: string;
  Fecha: Date;
  Valor: number;
  Dias: number;
}

export interface Variable {
  Nombre: string;
  TipoGrafico: string;
  UnidadMedida: string;
  Datos: Datos[];
}



