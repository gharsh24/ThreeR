import React, { useEffect, useState } from "react";
import { Pie, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { db, auth } from "../firebase-config";
import { query, collection, where, getDocs } from "firebase/firestore";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const q = query(
        collection(db, "userpoints"),
        where("email", "==", auth.currentUser.email)
      );

      try {
        const querySnapshot = await getDocs(q);
        const userDoc = querySnapshot.docs[0];
        if (userDoc) {
          setUserData({ id: userDoc.id, ...userDoc.data() });
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const pointsData = {
    labels: ["Points Earned", "Points Remaining"],
    datasets: [
      {
        label: "Points Progress",
        data: userData ? [userData.points, userData.points * 2] : [0, 0],
        backgroundColor: ["#4CAF50", "#FFC107"],
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
        data: userData
          ? [userData.activedays, 30 - userData.activedays]
          : [0, 0],
        backgroundColor: ["#2196F3", "#F44336"],
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
        data: userData
          ? [userData.completedtasks, userData.completedtasks + 10]
          : [0, 0],
        backgroundColor: ["#673AB7", "#FF5722"],
        borderColor: ["#673AB7", "#FF5722"],
        borderWidth: 1,
      },
    ],
  };

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
};

export default PieChart;
