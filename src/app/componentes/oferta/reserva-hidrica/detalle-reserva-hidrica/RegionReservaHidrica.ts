export class RegionDetalleReservaHidrica {
  constructor(
    public id: string,
    public nombre: string,
    public ciudades: CiudadDetalleReservaHidrica[],
    public sumaVolumenUtilDiarioGwh: number,
    public sumaVolumenUtilDiarioPorcentaje: number,
    public sumaCapacidadUtilGwh: number,
    public sumaVolumenGwh: number,
    public sumanVolumenPorcentaje: number,
    public sumanVolumenMaximoTecnicoGwh: number,
    public sumanVertimientoGwh: number,
    public sumanMosGwh: number,
    public sumanMoiGwh: number,
    public sumaDiferencia: number
  ) {}
}

export class CiudadDetalleReservaHidrica {
  constructor(
    public fecha: string,
    public nombre: string,
    public idregion: string,
    public volumenUtilDiarioMm3: number,
    public volumenUtilDiarioGwh: number,
    public volumenUtilDiarioPorcentaje: number,
    public capacidadUtilGwh: number,
    public nepPorcentaje: number,
    public volumenUtilMenosNepPorcentaje: number,
    public volumenMm3: number,
    public volumenGwh: number,
    public volumenPorcentaje: number,
    public volumenMaximoTecnicoGwh: number,
    public vertimientoGwh: number,
    public mosGwh: number,
    public moiGwh: number,
    public diferencia: number
  ) {}
}
