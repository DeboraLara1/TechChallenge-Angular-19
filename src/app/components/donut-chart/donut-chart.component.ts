import { Component, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-donut-chart',
  imports: [],
  templateUrl: './donut-chart.component.html',
  styleUrl: './donut-chart.component.css'
})
export class DonutChartComponent {
  @ViewChildren('circle') circles!: QueryList<SVGElement>;

  public data = [30, 25, 20, 25];

  ngAfterViewInit(): void {
    this.updateChart();
  }

  updateChart(): void {
    let offset = 0;

    this.circles.toArray().forEach((circle, index) => {
      const dashArray = (this.data[index] / 100) * 100;
      const dashOffset = -offset;

      circle.style.strokeDasharray = `${dashArray} 100`;
      circle.style.strokeDashoffset = `${dashOffset}`;

      offset += dashArray;
    });
  }

}
