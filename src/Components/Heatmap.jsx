import React, { useEffect, useState } from "react";
import HeatMap from "@uiw/react-heat-map";
import { auth } from "../firebase-config";

const Heat = () => {
  const [signInDate, setSignInDate] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in
        const lastSignInTime = user.metadata.lastSignInTime;
        console.log(lastSignInTime);
        const lastSignInDate = new Date(lastSignInTime)
          .toISOString()
          .split("T")[0];
        setSignInDate(lastSignInDate);
      } else {
        // User is signed out
        setSignInDate(null);
      }
    });

    return () => unsubscribe(); // Cleanup on component unmount
  }, []);

  const value = [
    { date: signInDate, count: 10 }, // Mark the user's last sign-in date
  ];

  return (
    <div className="container mt-3">
      <h4 className="text-center fw-bold"> Heat Map</h4>
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="w-100">
            <HeatMap
              className="w-100"
              width={500}
              space={3}
              legendCellSize={0}
              value={value}
              weekLabels={["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]}
              startDate={new Date("2023/12/1")}
              monthLabels={[
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heat;
