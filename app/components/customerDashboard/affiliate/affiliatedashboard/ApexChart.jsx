import React, { Component } from 'react'
import ReactApexChart from 'react-apexcharts';


export class ApexChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
          series: [{
            name: "STOCK ABC",
            data: [31, 40, 28, 51, 42, 109, 100]
          }],
          options: {
            chart: {
              type: 'area',
              height: 250,
              zoom: {
                enabled: false
              }
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'straight'
            },
            
            title: {
              text: 'Fundamental Analysis of Stocks',
              align: 'left'
            },

            labels: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"],
            
            xaxis: {
              type: 'datetime',
            },
            yaxis: {
              opposite: true
            },
            legend: {
              horizontalAlign: 'left'
            }
          },
        };
      }

      render() {
        return (
          <div>
            <div id="chart">
              <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={250} />
            </div>
            <div id="html-dist"></div>
          </div>
        );
      }
    }

  export default ApexChart