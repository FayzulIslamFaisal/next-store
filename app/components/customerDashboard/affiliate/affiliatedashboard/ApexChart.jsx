"use client ";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { FaFilter } from "react-icons/fa6";

const ApexChart = () => {
    const [filterShow, setFilterShow] = useState(false);

    const [series] = useState([
        {
            name: "STOCK ABC",
            data: [31, 40, 28, 51, 42, 109, 100],
        },
    ]);

    const [options] = useState({
        chart: {
            type: "area",
            height: 250,
            zoom: {
                enabled: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "straight",
        },
        title: {
            text: "My Team Resale Chart ",
            align: "left",
        },
        labels: [
            "2018-09-19T00:00:00.000Z",
            "2018-09-19T01:30:00.000Z",
            "2018-09-19T02:30:00.000Z",
            "2018-09-19T03:30:00.000Z",
            "2018-09-19T04:30:00.000Z",
            "2018-09-19T05:30:00.000Z",
            "2018-09-19T06:30:00.000Z",
        ],
        xaxis: {
            type: "datetime",
        },
        yaxis: {
            opposite: true,
        },
        legend: {
            horizontalAlign: "left",
        },
    });

    return (
        <div>
            <div id="chart">
                <div className="d-flex justify-content-end position-relative">
                    {/* Simple div to ensure clickable area */}
                    <div
                        className="filter-icon p-1"
                        onClick={() => setFilterShow(!filterShow)}
                        style={{
                            cursor: "pointer",
                            color: "#6e8192",
                            position: "absolute",
                            right: "30px",
                            top: "-2px",
                            zIndex: "10",
                        }}
                    >
                        <FaFilter />
                    </div>
                    {filterShow && (
                        <ul
                            className="bg-white border py-2 d-flex flex-column gap-1"
                            style={{
                                position: "absolute",
                                right: "25px",
                                zIndex: "20",
                                top: "25px",
                                width: "130px",
                            }}
                        >
                            <li>
                                <a className="w-100 p-3" href="#">
                                    Last Day
                                </a>
                            </li>
                            <li>
                                <a className="w-100 p-3" href="#">
                                    Last Week
                                </a>
                            </li>
                            <li>
                                <a className="w-100 p-3" href="#">
                                    Last Month
                                </a>
                            </li>
                            <li>
                                <a className="w-100 p-3" href="#">
                                    Last Year
                                </a>
                            </li>
                        </ul>
                    )}
                </div>
                <ReactApexChart
                    options={options}
                    series={series}
                    type="area"
                    height={250}
                />
            </div>
            <div id="html-dist"></div>
        </div>
    );
};

export default ApexChart;
