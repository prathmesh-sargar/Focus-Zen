import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const Piechart = () => {
  const [activityLabels, setActivityLabels] = useState([]);
  const [timeSpent, setTimeSpent] = useState([]);

  useEffect(() => {
    const activities = [
      "Search Engine",
      "Communication Skills",
      "Resource Accessing",
      "Community Engagement",
    ];
    const times = [10, 20, 40, 30]; // Example data

    setActivityLabels(activities);
    setTimeSpent(times);
  }, []);

  return (
    <div className="flex justify-center items-center py-6 text-white">
      <div className="w-full max-w-[800px]">
        <h2 className="text-center text-xl font-semibold mb-4">
          Time Spent on Activities
        </h2>
        <Chart
          type="pie"
          width="100%" 
          height={400} 
          series={timeSpent.length > 0 ? timeSpent : [10, 20, 30, 40]}
          options={{
            chart: {
              background: "transparent", // Transparent background for better dark mode
            },
            title: {
              text: "____✍(◔◡◔)",
              style: {
                color: "#ffffff", // White title text
                fontSize: "18px",
                fontWeight: "bold",
              },
            },
            noData: { 
              text: "No Data Available",
              style: {
                color: "#ffffff", // White "no data" text
              },
            },
            colors: ["#FF5733", "#33FF57", "#3357FF", "#FF33A1"], // Custom colors
            labels: activityLabels.length > 0 ? activityLabels : ["Activity 1", "Activity 2", "Activity 3", "Activity 4"],
            legend: {
              position: "right",
              labels: {
                colors: "#ffffff", // White legend text
              },
            },
            dataLabels: {
              enabled: true,
              style: {
                colors: ["#ffffff"], // White data labels
              },
            },
            tooltip: {
              style: {
                fontSize: "14px",
                color: "#ffffff", // White tooltip text
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default Piechart;
