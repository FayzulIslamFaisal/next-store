"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically import ReactApexChart with SSR disabled
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const WithdrawChart = () => {
  // Initialize series and options state
  const [series, setSeries] = useState([]); // Empty array to avoid undefined issues
  const [options, setOptions] = useState(null); // null initially for options

  useEffect(() => {
    // Set chart series and options
    setSeries([44, 55, 41, 17]); // Populate series with data
    setOptions({
      chart: {
        type: "donut",
      },
      labels: ["Total Earning", "Balance", "Pending", "Withdrawable"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    });
  }, []);

  // Show a loading state if either series or options is not ready
  if (!series?.length ||series==0 || !series || !options) {
    return null;
  }
  

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={options} series={series} type="donut" height={250} width={320}
 />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default WithdrawChart;
