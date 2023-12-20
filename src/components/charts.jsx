import React from "react";
import { Pie, Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const Chart1 = () => {
  const pieChartData = {
    labels: ["Above 80%", "Above 60%", "Above 45%", "Above 30%", "Above 55%", "Above 5%"],
    datasets: [
      {
        label: "Sample Pie Chart",
        data: [2, 3, 6, 15, 18, 19],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#2ecc71",
          "#9b59b6",
          "#FFA500",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#2ecc71",
          "#9b59b6",
          "#FFA500",
        ],
      },
    ],
  };

  const barChartData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Sample Bar Chart",
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const pieOptions = {
    maintainAspectRatio: true,
  };

  const barOptions = {
    maintainAspectRatio: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className=" flex justify-center items-center">
      <div style={{width:'40%'}} className="flex flex-col justify-center items-center content-center">
        <h2>Pie Chart</h2>
        <Pie data={pieChartData} options={pieOptions} />
      </div>
      <div style={{width:'50%'}} className="items-center justify-center">
        <h2>Bar Chart</h2>
        <Bar data={barChartData} options={barOptions} />
      </div>
    </div>
  );
};

export default Chart1;
