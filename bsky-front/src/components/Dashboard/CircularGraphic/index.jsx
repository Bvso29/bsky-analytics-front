import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { StyleCircle } from './style';
import { useInteractionContext } from '../../../../providers/useInteractionContext.jsx';
import { StyledCen002 } from '@/app/variaveis';

// Carregar o componente Chart dinamicamente para evitar problemas com SSR
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const CircularGraphic = () => {
    const { percentageLikes, percentageReplies, percentageReposts, percentageQuotes } = useInteractionContext();
    const [series, setSeries] = useState([0, 0, 0, 0]); // Estado inicial para as séries
    const [isClient, setIsClient] = useState(false); // Estado para verificar se estamos no lado do cliente
    const [isDataReady, setIsDataReady] = useState(false); // Estado para verificar se os dados estão prontos

    useEffect(() => {
        // Atualizar o estado `series` com as porcentagens recebidas do contexto
        const newSeries = [
            percentageLikes !== undefined ? percentageLikes : 0,
            percentageReplies !== undefined ? percentageReplies : 0,
            percentageReposts !== undefined ? percentageReposts : 0,
            percentageQuotes !== undefined ? percentageQuotes : 0
        ];
        console.log('New series:', newSeries); // Adicionar log para verificar os valores das séries
        setSeries(newSeries);
        setIsDataReady(true); // Definir que os dados estão prontos
    }, [percentageLikes, percentageReplies, percentageReposts, percentageQuotes]);

    useEffect(() => {
        // Definir o estado como true quando estivermos no lado do cliente
        setIsClient(true);
    }, []);

    const options = {
        chart: {
            type: 'donut',
            events: {
                legendClick: (chartContext, seriesIndex, config) => {
                    return false; // Desativar clique na legenda
                },
                legendHover: (chartContext, seriesIndex, config) => {
                    return false; // Desativar hover na legenda
                }
            }
        },
        labels: ['Likes', 'Replies', 'Reposts', 'Quotes'], // Certifique-se de que não há valores indefinidos ou nulos
        colors: ['#008FFB', '#FF4560', '#00E396', '#f0f0f0'],
        legend: {
            position: 'bottom',
            labels: {
                colors: ['#008FFB', '#FF4560', '#00E396', '#f0f0f0'], // Cores da legenda
                useSeriesColors: false
            }
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    };

    // Adicionar logs para verificar as opções do gráfico
    console.log('Chart options:', options);

    // Renderizar o componente Chart apenas no lado do cliente e quando os dados estiverem prontos
    if (!isClient || !isDataReady) {
        return null; // Retornar null no lado do servidor ou enquanto os dados não estiverem prontos
    }

    // Verificar se todas as séries são números válidos
    const isValidSeries = series.every(value => typeof value === 'number' && !isNaN(value));
    if (!isValidSeries) {
        console.error('Invalid series data:', series);
        return null; // Retornar null se os dados das séries não forem válidos
    }

    return (
        <StyleCircle>
            <StyledCen002 className='Cen_002'>
                <Chart options={options} series={series} type="donut" width="380" />
            </StyledCen002>
        </StyleCircle>
    );
};

export default CircularGraphic;