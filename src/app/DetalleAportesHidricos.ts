export interface DetalleAporteHidricos {
    Campos: string[];
    Valores: string[][];
    /* 
        convertirDatos() {
    
            var groupBy = function <TItem>(xs: TItem[], key: string): { [key: string]: TItem[] } {
                return xs.reduce(function (rv, x) {
                    (rv[x[key]] = rv[x[key]] || []).push(x);
                    return rv;
                }, {});
            };
    
            this.Valores.forEach(result => {
                result.forEach(element => {.
    
    
                });
    
            });*/
};


export interface Region {

    id: number,
    nombre: string,
    ciudades: Ciudades[],
    sumaCaudalGwh: number,
    sumaCaudalPorcentaje: number,
    sumaPromedioAcumulado: number,
    sumaHistoricoGwh: number,
    sumaHidrologica: number

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





