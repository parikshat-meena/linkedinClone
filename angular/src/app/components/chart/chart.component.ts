import { Component, ViewChild } from "@angular/core";
import { ArcElement, Chart, Legend, PieController, Tooltip } from "chart.js";
// import { BaseChartDirective } from "ng2-charts";
import * as Highcharts from "highcharts";
Chart.register(PieController, ArcElement, Tooltip, Legend);

@Component({
  selector: "app-chart",
  standalone: true,
  imports: [],
  templateUrl: "./chart.component.html",
  styleUrl: "./chart.component.css",
})
export class ChartComponent {
  ngAfterViewInit() {
    this.renderChart();
  }

  renderChart() {
    Highcharts.chart("chartContainer", <Highcharts.Options>{
      chart: { type: "pie" },
      title: { text: "Sales Distribution" },
      tooltip: { pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>" },
      accessibility: { point: { valueSuffix: "%" } },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: "pointer",
          dataLabels: {
            enabled: true,
            format: "<b>{point.name}</b>: {point.percentage:.1f} %",
          },
        },
      },
      series: [
        {
          name: "Sales",
          type: "pie",
          data: [
            { name: "Product A", y: 40 },
            { name: "Product B", y: 30 },
            { name: "Product C", y: 20 },
            { name: "Product D", y: 10 },
          ],
        },
      ],
    });
  }
  // ngAfterViewInit() {
  //   this.renderChart();
  // }

  // renderChart() {
  //   Highcharts.chart("chartContainer", <Highcharts.Options>{
  //     chart: { type: "line" },
  //     title: { text: "Sales Over Time" },
  //     xAxis: { categories: ["Jan", "Feb", "Mar", "Apr"] },
  //     yAxis: { title: { text: "Sales ($)" } },
  //     series: [
  //       { name: "Product A", type: "line", data: [30, 50, 80, 120] },
  //       { name: "Product B", type: "line", data: [20, 40, 60, 90] },
  //     ],
  //   });
  // }
  // pieChartData = {
  //   labels: ["Red", "Blue", "Yellow"],
  //   datasets: [
  //     {
  //       data: [300, 500, 100],
  //       backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
  //       hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
  //     },
  //   ],
  // };

  // pieChartOptions = {
  //   responsive: true,
  //   plugins: {
  //     legend: {
  //       position: "top" as const,
  //     },
  //     tooltip: {
  //       enabled: true,
  //     },
  //   },
  // };
}
