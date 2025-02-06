import { Component, ViewChild } from "@angular/core";
import { ArcElement, Chart, Legend, PieController, Tooltip } from "chart.js";
import { BaseChartDirective } from "ng2-charts";

Chart.register(PieController, ArcElement, Tooltip, Legend);

@Component({
  selector: "app-chart",
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: "./chart.component.html",
  styleUrl: "./chart.component.css",
})
export class ChartComponent {
  pieChartData = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        data: [300, 500, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  pieChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      tooltip: {
        enabled: true,
      },
    },
  };
}
