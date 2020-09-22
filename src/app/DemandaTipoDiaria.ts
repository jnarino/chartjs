export class DemandaTipoDiaria {
  Nombre: string;
  Resolucion: string;
  TipoGrafico: string;
  Variables: Variable[];
}

export class Datos {
  Nombre: string;
  Id: string;
  Fecha: Date;
  Valor: number;
  Dias: number;
}

export class Variable {
  Nombre: string;
  TipoGrafico: string;
  UnidadMedida: string;
  Datos: Datos[];
}



