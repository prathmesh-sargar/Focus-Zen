import React, { useState } from 'react';
import Chart from 'react-apexcharts';

function Linechart() {
  // Mock data representing user engagement trends
  const [userEngagement, setUserEngagement] = useState([
    {
      name: "Search Engine Usage (Minutes)",
      data: [45, 55, 60, 70, 80, 90, 100, 120, 110, 130, 150, 160],
    },
    {
      name: "Speaking on Topics (Sessions)",
      data: [20, 25, 30, 40, 35, 50, 45, 60, 55, 65, 70, 75],
    },
    {
      name: "Community Engagement (Interactions)",
      data: [10, 15, 20, 30, 25, 35, 40, 50, 45, 60, 55, 70],
    },
  ]);

  // Chart options for better clarity
  const [option, setOption] = useState({
    chart: {
      background: "#000000", // Black background
    },
    title: {
      text: "____(⊙_⊙;) ",
      style: {
        color: "#FFFFFF", // White title text for visibility
        fontSize: "18px",
        fontWeight: "bold",
      },
    },
    xaxis: {
      title: {
        text: "Months",
        style: { color: "#FFFFFF" }, // White axis title
      },
      categories: [
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
      ],
      labels: {
        style: { color: "#FFFFFF" }, // White axis labels
      },
    },
    yaxis: {
      title: {
        text: "Time / Count",
        style: { color: "#FFFFFF" }, // White axis title
      },
      labels: {
        formatter: (val) => `${val}`,
        style: { color: "#FFFFFF" }, // White labels
      },
    },
    colors: ["#FF5733", "#33FF57", "#3357FF"], // Color coding for clarity
    legend: {
      position: "top",
      horizontalAlign: "center",
      labels: {
        colors: "#FFFFFF", // White legend text
      },
    },
    stroke: {
      curve: "smooth", // Smooth lines for better visualization
    },
    tooltip: {
      theme: "dark", // Ensures compatibility with dark theme
      style: {
        fontSize: "14px", // Adjust font size for readability
        fontFamily: "Arial, sans-serif", // Consistent font
      },
      y: {
        formatter: (value) => `${value}`, // Customize value format if needed
      },
    },
    grid: {
      borderColor: "#444", // Slightly lighter grid lines for visibility
    },
  });

  return (
    <div className="flex justify-center items-center py-6 bg-black">
      <div className="w-full max-w-[800px]">
        <h2 className="text-center text-xl font-semibold mb-4 text-white">
          Boost U - Engagement Trends 
        </h2>
        <Chart
          type="line"
          width="100%" // Full width for responsiveness
          height={400} // Fixed height
          series={userEngagement}
          options={option}
        />
      </div>
    </div>
  );
}

export default Linechart;
