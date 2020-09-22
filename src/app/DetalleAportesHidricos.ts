export class DetalleAporteHidricos {
    Campos: string[];
    Valores: string[][];
}

export class Region {
    constructor(
        public id: number,
        public nombre: string,
        public ciudades: Ciudades[],
        public sumaCaudalGwh: number,
        public sumaCaudalPorcentaje: number,
        public sumaPromedioAcumulado: number,
        public sumaHistoricoGwh: number,
        public sumaHidrologica: number
    ) { }
}

export class Ciudades {
    constructor(
        public fecha: string,
        public nombre: string,
        public idregion: string,
        public caudal_gwh: string,
        public caudal_m3: string,
        public acumulado_ghw: string,
        public acumulado_m3: string,
        public media_ghw: string,
        public pss_gwh: string,
        public media_m3: string,
        public pss_m3: string,
        public porcentaje_media: string,
        public porcentaje_media_medio: string) { }
}

