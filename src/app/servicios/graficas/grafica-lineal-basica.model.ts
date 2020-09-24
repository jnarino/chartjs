import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
export class GraficaLinealBasica {
  constructor(
    public datasets: ChartDataSets[] = [],
    public labels: Label[] = [],
    public options = {},
    public colors: Color[] = [],
    public legend: boolean = true,
    public chartType = 'line',
    public plugins = []
  ) {}
}
