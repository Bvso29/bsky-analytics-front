import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { StyleCircle } from './style';
import { StyledCen002 } from '@/app/variaveis';

// Carregar ReactApexChart dinamicamente para suportar Next.js
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const CircularGraphic = () => {
    const [series, setSeries] = useState([25, 15, 44, 55]);
    const [options, setOptions] = useState({
        chart: {
            width: '100%',
            height: '100%',
            type: 'pie',
        },
        labels: ['Likes', 'Reply', 'Quotes', 'Follow'],
        colors: ['#0095f6'], // Usar apenas a cor #0095f6
        theme: {
            monochrome: {
                enabled: true,
            },
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    offset: -5,
                },
            },
        },
        grid: {
            padding: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
            },
        },

        dataLabels: {
            formatter(val, opts) {
                const name = opts.w.globals.labels[opts.seriesIndex];
                return [name, val.toFixed(1) + '%'];
            },
        },
        legend: {
            show: false,
        },
    });

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        // Garantir que o gráfico só será renderizado no cliente
        setIsClient(true);
    }, []);

    return (
        <StyleCircle>
            <div className='Cen_002'>

                <div id="chart">
                    {isClient && (
                        <ReactApexChart options={options} series={series} type="pie" />
                    )}
                </div>
            </div>
        </StyleCircle>
    );
};

export default CircularGraphic;
