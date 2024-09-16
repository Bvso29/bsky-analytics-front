import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { StyleHearthMap } from './style';
import { StyledCen002 } from '@/app/variaveis';

// Carregar ReactApexChart dinamicamente para suportar Next.js
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

// Função para gerar dados crescentes
const generateData = (count, startValue) => {
    let i = 0;
    const series = [];
    let currentValue = startValue;
    while (i < count) {
        const x = i.toString(); // Ajustar para horas de 0 a 23
        const y = currentValue;
        series.push({ x, y });
        currentValue += 1; // Incrementar o valor
        i++;
    }
    return series;
};

const HeatMapGraphic = () => {
    const [series, setSeries] = useState([]);
    const [options, setOptions] = useState({
        chart: {
            height: '100%',
            width: '100%',
            type: 'heatmap',
            toolbar: {
                show: true, // Desativar a toolbar
            },
        },
        plotOptions: {
            heatmap: {
                colorScale: {
                    ranges: [
                        {
                            from: 0,
                            to: 19,
                            color: '#FEFEFF'
                        },
                        {
                            from: 20,
                            to: 49,
                            color: '#D4E4FF'
                        },
                        {
                            from: 50,
                            to: 99,
                            color: '#A9C9FF'
                        },
                        {
                            from: 100,
                            to: 149,
                            color: '#7EADFF'
                        },
                        {
                            from: 150,
                            to: 1000,
                            color: '#008FFB'
                        }
                    ]
                }
            }
        },
        dataLabels: {
            enabled: false,
        },
        title: {
            text: 'Interações por Hora',
            style: {
                color: '#f0f0f0', // Cor do título
                fontSize: '20px',
                fontWeight: 'bold',
            },
        },
        xaxis: {
            categories: Array.from({ length: 24 }, (_, i) => i.toString()), // Horas de 0 a 23
            title: {
                text: 'Horas do Dia',
                style: {
                    color: '#f0f0f0', // Cor do título do eixo X
                    fontSize: '16px',
                    fontWeight: 'bold',
                },
            },
            labels: {
                style: {
                    colors: '#f0f0f0', // Cor dos rótulos do eixo X
                    fontSize: '12px',
                },
            },
        },
        yaxis: {
            labels: {
                style: {
                    colors: '#f0f0f0', // Cor dos rótulos do eixo Y
                    fontSize: '12px',
                },
            },
        },
        tooltip: {
            theme: 'dark', // Tema escuro para o tooltip
            y: {
                formatter: function (val, { seriesIndex, dataPointIndex, w }) {
                    const yCategory = w.globals.seriesNames[seriesIndex];
                    return `Valor: ${val} (${yCategory})`;
                }
            },
            x: {
                formatter: function (val) {
                    return `Hora: ${val}`;
                }
            }
        },
        legend: {
            show: false, // Desativar a legenda padrão
        }
    });

    useEffect(() => {
        setSeries([
            {
                name: 'Domingo',
                data: generateData(24, 1), // 24 horas, começando de 1
            },
            {
                name: 'Segunda',
                data: generateData(24, 25), // Próximo conjunto de 24 valores
            },
            {
                name: 'Terça',
                data: generateData(24, 49),
            },
            {
                name: 'Quarta',
                data: generateData(24, 73),
            },
            {
                name: 'Quinta',
                data: generateData(24, 97),
            },
            {
                name: 'Sexta',
                data: generateData(24, 121),
            },
            {
                name: 'Sábado',
                data: generateData(24, 1000),
            },
        ]);
    }, []);

    return (
        <StyleHearthMap>
            <StyledCen002 className='Cen_002'>
                <div id="chart" style={{ overflow: 'hidden' }}>
                    <ReactApexChart options={options} series={series} type="heatmap" height="100%" width="100%" />
                </div>
                <div id="html-dist"></div>
                <div className="custom-legend">
                    <div className="legend-item">
                        <span className="legend-color" style={{ backgroundColor: '#FEFEFF' }}></span>
                        <span className="legend-label">Baixo</span>
                    </div>
                    <div className="legend-item">
                        <span className="legend-color" style={{ backgroundColor: '#D4E4FF' }}></span>
                        <span className="legend-label">Moderado</span>
                    </div>
                    <div className="legend-item">
                        <span className="legend-color" style={{ backgroundColor: '#A9C9FF' }}></span>
                        <span className="legend-label">Médio</span>
                    </div>
                    <div className="legend-item">
                        <span className="legend-color" style={{ backgroundColor: '#7EADFF' }}></span>
                        <span className="legend-label">Alto</span>
                    </div>
                    <div className="legend-item">
                        <span className="legend-color" style={{ backgroundColor: '#008FFB' }}></span>
                        <span className="legend-label">Muito Alto</span>
                    </div>
                </div>
            </StyledCen002>
            <style jsx>{`
                .custom-legend {
                    display: flex;
                    justify-content: center;
                    margin-top: 10px;
                }
                .legend-item {
                    display: flex;
                    align-items: center;
                    margin-right: 20px;
                }
                .legend-color {
                    width: 20px;
                    height: 20px;
                    display: inline-block;
                    margin-right: 5px;
                }
                .legend-label {
                    color: #f0f0f0;
                    font-size: 14px;
                }
            `}</style>
        </StyleHearthMap>
    );
};

export default HeatMapGraphic;