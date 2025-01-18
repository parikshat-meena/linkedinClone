import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { Chart, ChartConfiguration, ChartItem, registerables } from "chart.js";
@Component({
  selector: "app-chart",
  standalone: true,
  imports: [],
  templateUrl: "./chart.component.html",
  styleUrl: "./chart.component.css",
})
export class ChartComponent {
  @ViewChild("chartCanvas", { static: true })
  chartCanvas!: any;
  // @Input() chartConfig!: ChartConfiguration<"pie">;
  // private chart!: Chart<"pie">;
  // constructor() {
  //   // Register necessary Chart.js components
  //   Chart.register(...registerables);
  // }
  // ngOnInit(): void {
  //   this.createChart();
  // }
  // private createChart(): void {
  //   if (this.chartConfig) {
  //     this.chart = new Chart<"pie">(
  //       this.chartCanvas.nativeElement,
  //       this.chartConfig
  //     );
  //   }
  // }
  // ngOnDestroy(): void {
  //   if (this.chart) {
  //     this.chart.destroy();
  //   }
  // }

  data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];

  ele: any = document.getElementById("acquisitions");

  async getChart() {
    // new Chart(this.chartCanvas, {
    //   type: "bar",
    //   data: {
    //     labels: this.data.map((row) => row.year),
    //     datasets: [
    //       {
    //         label: "Acquisitions by year",
    //         data: this.data.map((row) => row.count),
    //       },
    //     ],
    //   },
    // });
    const ctx: any = document.getElementById("myChart");

    new Chart(this.chartCanvas, {
      type: "bar",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
