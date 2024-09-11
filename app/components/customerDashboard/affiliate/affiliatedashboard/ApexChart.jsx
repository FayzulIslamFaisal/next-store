"use client";
import { getAffiliateIncomeChart } from "@/app/services/affiliate/getAffiliateIncomeChart";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { FaFilter } from "react-icons/fa6";

const ApexChart = () => {
    const [filterShow, setFilterShow] = useState(false);
    const [chartData, setChartData] = useState([]);
    const [selectedFilter, setSelectedFilter] = useState("daily");
    const { data: session, status } = useSession();

    useEffect(() => {
        const fetchChartInfo = async () => {
            if (session?.accessToken) {
                try {
                    const chartInfo = await getAffiliateIncomeChart(
                        session?.accessToken,
                        selectedFilter
                    );

                    setChartData(chartInfo?.results?.earnings_info || []);
                } catch (error) {
                    console.error("Error inside useEffect:", error);
                }
            }
        };

        fetchChartInfo();
    }, [selectedFilter, session?.accessToken]);

    const handleFilterClick = (filter) => {
        setSelectedFilter(filter);
        setFilterShow(false);
    };

    const earnings = chartData.map((item) => item?.earnings);
    const labels = chartData.map((item) => item?.name);

    // console.log("earnings", { earnings });
    // console.log("labels", { labels });
    // console.log("selectedFilter", { selectedFilter });

    const series = [
        {
            name: "Earnings",
            data: earnings.length ? earnings : "",
        },
    ];

    const options = {
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
            text: "My Team Resale Chart",
            align: "left",
        },
        labels: labels.length ? labels : "",
        xaxis: {
            type: "datetime",
        },
        yaxis: {
            opposite: true,
        },
        legend: {
            horizontalAlign: "left",
        },
    };

    return (
        <div>
            <div id="chart">
                <div className="d-flex justify-content-end position-relative">
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
                                <button
                                    onClick={() => handleFilterClick("daily")}
                                    className="w-100 px-3 py-1 border-0 bg-transparent text-left"
                                >
                                    Last Day
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => handleFilterClick("weekly")}
                                    className="w-100 px-3 py-1 border-0 bg-transparent text-left"
                                >
                                    Last Week
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => handleFilterClick("monthly")}
                                    className="w-100 px-3 py-1 border-0 bg-transparent text-left"
                                >
                                    Last Month
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => handleFilterClick("yearly")}
                                    className="w-100 px-3 py-1 border-0 bg-transparent text-left"
                                >
                                    Last Year
                                </button>
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
