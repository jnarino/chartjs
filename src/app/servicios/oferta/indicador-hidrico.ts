export class IndicadorHidricoDto {
  Nombre: string;
  Resolucion: string;
  TipoGrafico: string;
  Variables: Variable[];
}

export class Variable {
  Nombre: string;
  TipoGrafico: string;
  UnidadMedida: string;
  Datos: Dato[];
}

export class Dato {
  Fecha: string;
  Valor: number;
}
