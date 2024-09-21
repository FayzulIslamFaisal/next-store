"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
// import ReactApexChart from "react-apexcharts";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const WithdrawChart = () => {
  const [chartOptions, setChartOptions] = useState(null);

  useEffect(() => {
    setChartOptions({
      series: [44, 55, 41, 17, 15],
      options: {
        chart: {
          type: "donut",
        },
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
      },
    });
  }, []);

  if (!chartOptions) {
    return <div>Loading chart...</div>; // Add a loading state while chart data is being initialized
  }

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={chartOptions.options}
          series={chartOptions.series}
          type="donut"
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default WithdrawChart;
