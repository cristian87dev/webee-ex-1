import {
  Input, Output, EventEmitter,
  ViewChild, ElementRef,
  Component,
  OnInit,
  HostListener
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'bar-chart',
  styleUrls: ['./bar-chart.component.scss'],
  templateUrl: './bar-chart.component.html'
})
export class BarChartComponent implements OnInit {
  @HostListener('window:resize', ['$event']) onResize(event) {
    this.deviceWidth = event.target.innerWidth;
    if (event.target.innerWidth > 768) {
      this.updateChartSize(this.deviceWidth - 200, 75 * this.result.length);
    } else {
      this.updateChartSize(this.deviceWidth, 50 * this.result.length);
    }
  }
  @Input()
  set sourceData(data: any[]) {
    this.result = Array.isArray(data) ? data : [];
    this.updateChartSize(this.deviceWidth, 50 * this.result.length);
  }

  result: any[] = [];

  deviceWidth: number = 300;
  view: any[] = [300, 200];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Population';
  showYAxisLabel = false;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() { }

  public ngOnInit() {

  }

  onSelect(event) {
    console.log(event);
  }

  updateChartSize(newWidth?: number, newHeight?: number) {
    const width = newWidth || this.view[0];
    const height = newHeight || this.view[1];
    this.view = [width, height];
  }

}
