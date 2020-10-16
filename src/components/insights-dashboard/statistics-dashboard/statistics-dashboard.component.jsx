import React from 'react';

import { Col } from 'react-bootstrap';

import { Line, Doughnut } from 'react-chartjs-2';

import './statistics-dashboard.styles.scss';

export default class StatisticsDahboard extends React.Component {
    constructor() {
        super();

        this.state = {
            lineChart: {
                data: (canvas) => {
                    const ctx = canvas.getContext("2d")
                    const gradient1 = ctx.createLinearGradient(0, 0, 0, 300);
                    gradient1.addColorStop(0, 'rgba(85,216,254,0.8)');
                    gradient1.addColorStop(1, 'rgba(85,216,254,0.01)');

                    const gradient2 = ctx.createLinearGradient(0, 0, 0, 300);
                    gradient2.addColorStop(0, 'rgba(163,160,251,0.6)');
                    gradient2.addColorStop(1, 'rgba(163,160,251,0.01)');


                    return {
                        datasets: [{
                            label: 'Products Sold',
                            backgroundColor: gradient1,
                            pointBackgroundColor: 'white',
                            pointStyle: 'circle',
                            pointRadius: 5,
                            // pointBorderColor: 'rgb(0, 0, 0)',
                            borderWidth: 2,
                            borderColor: '#55d8fe',
                            data: [2, 4, 8, 6, 5, 1]
                        },
                        {
                            label: 'Total Views',
                            backgroundColor: gradient2,
                            pointBackgroundColor: 'white',
                            pointStyle: 'circle',
                            pointRadius: 5,
                            // pointBorderColor: 'rgb(0, 0, 0)',
                            borderWidth: 2,
                            borderColor: '#a3a0fb',
                            data: [5, 1, 4, 2, 4, 2]
                        },
                        ],
                        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
                    }
                },
                options: {
                    responsive: true,
                    offsetGridLines: false,
                    legend: {
                        position: "bottom",
                        align: "start",
                        labels: {
                            fontSize: 13,
                            boxWidth: 12,
                            usePointStyle: true,
                        }
                    },
                    scales: {
                        xAxes: [{
                            display: true,
                            gridLines: {
                                display: false,
                                drawBorder: false,
                            },
                            scaleLabel: {
                                display: false,
                                labelString: 'Month'
                            }
                        }],
                        yAxes: [{
                            display: true,
                            ticks: {
                                callback: function (label, index, labels) {
                                    return "$" + label + "k";
                                }
                            },
                            gridLines: {
                                display: false,
                                drawBorder: false,
                            },
                            scaleLabel: {
                                display: false,
                                labelString: 'Value'
                            }
                        }]
                    },
                    title: {
                        display: false,
                        text: 'Statistics'
                    }
                }
            },
            doughnutChart: {
                data: {
                    datasets: [
                        {
                            data: [
                                2909,
                                3456,
                                7899,
                                1289
                            ],
                            backgroundColor: [
                                '#55d8fe',
                                '#ff8373',
                                '#ffda83',
                                '#a3a0fb'
                            ],
                            pointStyle: 'circle'
                        }
                    ],
                    labels: [
                        'France 2909 Sales',
                        'France 3901 Sales',
                        'Italy 3210 Sales',
                        'Italy 2901 Sales'
                    ]
                },
                options: {
                    responsive: true,
                    legend: {
                        position: 'bottom',
                        align: 'center',
                        labels: {
                            fontSize: 13,
                            bowWidth: 12,
                            usePointStyle: true
                        }
                    },
                    scales: {

                    },
                    elements: {
                        center: {
                            text: '230,0900 Sales'
                        }
                    }
                }
            }
        }

        this.lineChartReference = React.createRef();
    }
    render() {

        return (
            <>
                <Col xl={6} lg={12} md={12}>
                    <div className="card chart-card">
                        <h6 className="p-3">Statistics</h6>
                        <Line {...this.state.lineChart} width={318} height={350}
                            ref={this.lineChartReference} />
                    </div>
                </Col>

                <Col xl={6} lg={12} md={12}>
                    <div className="card chart-card seconds">
                        <h6 className="p-3">Sales Distribution</h6>
                        <Doughnut {...this.state.doughnutChart} width={318} height={350} />
                    </div>
                </Col>
            </>
        )
    }
}
