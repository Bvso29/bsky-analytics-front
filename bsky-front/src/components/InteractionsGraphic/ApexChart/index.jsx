// import React from 'react';
// import dynamic from 'next/dynamic';

// // Carregar ReactApexChart dinamicamente para evitar o erro de `window is not defined`
// const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

// class ApexChart extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             series: [{
//                 name: 'Total Likes',
//                 data: props.data.map(item => item.totalLikes)
//             }],
//             options: {
//                 chart: {
//                     height: 350,
//                     type: 'bar',
//                     toolbar: {
//                         show: true, // Desativa a toolbar
//                         style: {
//                             color: '#444'
//                         }
//                     }
//                 },
//                 plotOptions: {
//                     bar: {
//                         borderRadius: 10,
//                         dataLabels: {
//                             position: 'top', // top, center, bottom
//                         },
//                     }
//                 },
//                 dataLabels: {
//                     enabled: true,
//                     formatter: function (val) {
//                         return val;
//                     },
//                     offsetY: -20,
//                     style: {
//                         fontSize: '12px',
//                         colors: ["#304758"]
//                     }
//                 },
//                 xaxis: {
//                     categories: props.data.map(item => item.day),
//                     position: 'top',
//                     axisBorder: {
//                         show: false
//                     },
//                     axisTicks: {
//                         show: false
//                     },
//                     crosshairs: {
//                         fill: {
//                             type: 'gradient',
//                             gradient: {
//                                 colorFrom: '#D8E3F0',
//                                 colorTo: '#BED1E6',
//                                 stops: [0, 100],
//                                 opacityFrom: 0.4,
//                                 opacityTo: 0.5,
//                             }
//                         }
//                     },
//                     tooltip: {
//                         enabled: true,
//                         theme: 'dark', // Define o tema do tooltip como escuro
//                         style: {
//                             backgroundColor: 'blue', // Define o fundo do tooltip como azul
//                             color: 'white' // Define a cor do texto como branco
//                         },
//                         custom: function({ series, seriesIndex, dataPointIndex, w }) {
//                             const val = series[seriesIndex][dataPointIndex];
//                             const date = props.data[dataPointIndex].date;
//                             return `<div class="arrow_box" style="background: blue; color: white; padding: 10px; border-radius: 5px;">
//                                 <span>${val} likes on ${date}</span>
//                             </div>`;
//                         }
//                     }
//                 },
//                 yaxis: {
//                     axisBorder: {
//                         show: false
//                     },
//                     axisTicks: {
//                         show: false,
//                     },
//                     labels: {
//                         show: false,
//                         formatter: function (val) {
//                             return val;
//                         }
//                     }
//                 },
//                 title: {
//                     text: 'Total Likes por Dia',
//                     floating: true,
//                     offsetY: 330,
//                     align: 'center',
//                     style: {
//                         color: '#444'
//                     }
//                 }
//             },
//         };
//     }

//     componentDidUpdate(prevProps) {
//         if (prevProps.data !== this.props.data) {
//             this.setState({
//                 series: [{
//                     name: 'Total Likes',
//                     data: this.props.data.map(item => item.totalLikes)
//                 }],
//                 options: {
//                     ...this.state.options,
//                     xaxis: {
//                         ...this.state.options.xaxis,
//                         categories: this.props.data.map(item => item.day)
//                     }
//                 }
//             });
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <div id="chart">
//                     <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
//                 </div>
//                 <div id="html-dist"></div>
//             </div>
//         );
//     }
// }

// export default ApexChart;


import React from 'react';
import dynamic from 'next/dynamic';

// Carregar ReactApexChart dinamicamente para evitar o erro de `window is not defined`
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

class ApexChart extends React.Component {
    constructor(props) {
        super(props);

        // Log dos dados recebidos
        console.log('Dados recebidos no construtor:', props.data);

        this.state = {
            series: [{
                name: this.getSeriesName(props.metric),
                data: props.data.map(item => item.y || 0) // Verificação adicional
            }],
            options: {
                chart: {
                    height: 350,
                    type: 'bar',
                    toolbar: {
                        show: true, // Ativa a toolbar
                        style: {
                            color: '#444'
                        }
                    }
                },
                plotOptions: {
                    bar: {
                        borderRadius: 10,
                        dataLabels: {
                            position: 'top', // top, center, bottom
                        },
                    }
                },
                dataLabels: {
                    enabled: true,
                    formatter: function (val) {
                        return val;
                    },
                    offsetY: -20,
                    style: {
                        fontSize: '12px',
                        colors: ["#304758"]
                    }
                },
                xaxis: {
                    categories: props.data.map(item => item.x || ''), // Verificação adicional
                    position: 'top',
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false
                    },
                    crosshairs: {
                        fill: {
                            type: 'gradient',
                            gradient: {
                                colorFrom: '#D8E3F0',
                                colorTo: '#BED1E6',
                                stops: [0, 100],
                                opacityFrom: 0.4,
                                opacityTo: 0.5,
                            }
                        }
                    },
                    tooltip: {
                        enabled: true,
                        theme: 'dark', // Define o tema do tooltip como escuro
                        style: {
                            backgroundColor: 'blue', // Define o fundo do tooltip como azul
                            color: 'white' // Define a cor do texto como branco
                        },
                        custom: function({ series, seriesIndex, dataPointIndex, w }) {
                            const val = series[seriesIndex][dataPointIndex];
                            const date = props.data[dataPointIndex]?.date || 'N/A'; // Verificação adicional
                            return `<div class="arrow_box" style="background: blue; color: white; padding: 10px; border-radius: 5px;">
                                <span>${val} likes on ${date}</span>
                            </div>`;
                        }
                    }
                },
                yaxis: {
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false,
                    },
                    labels: {
                        show: false,
                        formatter: function (val) {
                            return val;
                        }
                    }
                },
                title: {
                    text: this.getTitleText(props.metric),
                    floating: true,
                    offsetY: 330,
                    align: 'center',
                    style: {
                        color: '#444'
                    }
                }
            },
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.data !== this.props.data || prevProps.metric !== this.props.metric) {
            // Log dos dados recebidos na atualização
            console.log('Dados recebidos no componentDidUpdate:', this.props.data);

            this.setState({
                series: [{
                    name: this.getSeriesName(this.props.metric),
                    data: this.props.data.map(item => item.y || 0) // Verificação adicional
                }],
                options: {
                    ...this.state.options,
                    xaxis: {
                        ...this.state.options.xaxis,
                        categories: this.props.data.map(item => item.x || '') // Verificação adicional
                    },
                    title: {
                        ...this.state.options.title,
                        text: this.getTitleText(this.props.metric)
                    }
                }
            });
        }
    }

    getSeriesName(metric) {
        switch (metric) {
            case 'likeCount':
                return 'Total Likes';
            case 'repostCount':
                return 'Total Reposts';
            case 'replyCount':
                return 'Total Replies';
            case 'quoteCount':
                return 'Total Quotes';
            default:
                return 'Total';
        }
    }

    getTitleText(metric) {
        switch (metric) {
            case 'likeCount':
                return 'Total Likes por Dia';
            case 'repostCount':
                return 'Total Reposts por Dia';
            case 'replyCount':
                return 'Total Replies por Dia';
            case 'quoteCount':
                return 'Total Quotes por Dia';
            default:
                return 'Total por Dia';
        }
    }

    render() {
        return (
            <div>
                <div id="chart">
                    <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
                </div>
                <div id="html-dist"></div>
            </div>
        );
    }
}

export default ApexChart;