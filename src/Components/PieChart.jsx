import React from "react";
import { Pie } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const pointsData = {
  labels: ["Points Earned", "Points Remaining"],
  datasets: [
    {
      label: "Points Progress",
      data: [150, 50], // Example: 150 points earned, 50 points remaining
      backgroundColor: ["#4CAF50", "#FFC107"], // Green for earned, Amber for remaining
      borderColor: ["#4CAF50", "#FFC107"],
      borderWidth: 1,
    },
  ],
};

const daysData = {
  labels: ["Active Days", "Inactive Days"],
  datasets: [
    {
      label: "Days Activity",
      data: [25, 10], // Example: 25 active days, 10 inactive days
      backgroundColor: ["#2196F3", "#F44336"], // Blue for active, Red for inactive
      borderColor: ["#2196F3", "#F44336"],
      borderWidth: 1,
    },
  ],
};

const tasksData = {
  labels: ["Completed Tasks", "Remaining Tasks"],
  datasets: [
    {
      label: "Task Completion",
      data: [20, 5], // Example: 20 tasks completed, 5 tasks remaining
      backgroundColor: ["#673AB7", "#FF5722"], // Deep Purple for completed, Deep Orange for remaining
      borderColor: ["#673AB7", "#FF5722"],
      borderWidth: 1,
    },
  ],
};

function PieChart() {
  return (
    <>
      <div className="row me-3">
        <div className="col-md-4">
          <Pie data={pointsData} options={{ maintainAspectRatio: false }} />
        </div>
        <div className="col-md-4">
          <Pie data={daysData} options={{ maintainAspectRatio: false }} />
        </div>
        <div className="col-md-4">
          <Doughnut data={tasksData} options={{ maintainAspectRatio: false }} />
        </div>
      </div>
    </>
  );
}

export default PieChart;
