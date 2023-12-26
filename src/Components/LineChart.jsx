import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const data4 = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Average User Contribution",
      data: [120, 150, 200, 50, 250, 210, 300],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 1)",
    },
    {
      label: "Your Contribution",
      data: [80, 160, 120, 90, 150, 230, 280],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 1)",
    },
  ],
};
export const options = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "User Contribution",
    },
  },
};

function LineChart() {
  return (
    <>
      <div className="row me-3 mt-3">
        <div className="col-md-6 mx-auto">
          <Line options={options} data={data4} />
        </div>
      </div>
    </>
  );
}

export default LineChart;
