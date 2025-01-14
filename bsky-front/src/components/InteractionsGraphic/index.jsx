

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ApexChart from './ApexChart'; // Certifique-se de que o caminho está correto
import { StyledInteractionsGraphic } from './style.js';
import { InteractionsCard } from '../Interactions/InteractionsItem/index.jsx'; // Importação nomeada
import SelectGroup from './SelectGroup';

const fetchTotalMetricsLastDays = async (days, metric) => {
    const today = new Date();
    const metricsData = [];
    const auth = localStorage.getItem('auth'); // Obter o auth do localStorage

    if (!auth) {
        console.error('Auth não encontrado no localStorage');
        return metricsData;
    }

    const parsedAuth = JSON.parse(auth);
    if (!parsedAuth || !parsedAuth.did) {
        console.error('DID não encontrado no auth');
        return metricsData;
    }

    const did = parsedAuth.did; // Parse o auth para obter o did

    // Otimização: Fazer as requisições em paralelo
    const requests = [];
    for (let i = 1; i <= days; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() - i);
        date.setHours(0, 0, 0, 0); // Ajusta a hora para meia-noite para evitar problemas de fuso horário
        const formattedDate = date.toISOString().split('T')[0];
        const displayDate = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;

        const request = axios.get(`https://api.ojaum.lat/feedbydate?did=${did}&date=${formattedDate}`, {
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': process.env.NEXT_PUBLIC_API_KEY
            }
        }).then(response => {
            if (response.data && response.data.postsInfo) {
                const totalMetric = response.data.postsInfo.reduce((sum, post) => sum + (post[metric] || 0), 0);
                return {
                    day: displayDate,
                    totalMetric,
                    date: formattedDate // Adiciona a data ao objeto
                };
            } else {
                console.error(`No postsInfo data returned for date ${formattedDate}`);
                return null;
            }
        }).catch(error => {
            console.error(`Erro ao buscar ${metric} para a data ${formattedDate}:`, error);
            return null;
        });

        requests.push(request);
    }

    const results = await Promise.all(requests);
    const validResults = results.filter(result => result !== null);

    // Ordenar os dados do mais antigo para o mais recente
    validResults.reverse();

    return validResults;
};

export function InteractionsGraphic() {
    const [metricsData, setMetricsData] = useState([]);
    const [totalMetric, setTotalMetric] = useState(0);
    const [averageMetricPercentage, setAverageMetricPercentage] = useState(0);
    const [days, setDays] = useState(7); // Estado para armazenar o número de dias selecionado
    const [metric, setMetric] = useState('likeCount'); // Estado para armazenar a métrica selecionada
    const [loading, setLoading] = useState(true); // Estado para controlar o indicador de carregamento
    const [data7Days, setData7Days] = useState([]);
    const [data14Days, setData14Days] = useState([]);
    const [data30Days, setData30Days] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true); // Inicia o carregamento
            const data7 = await fetchTotalMetricsLastDays(7, metric);
            setData7Days(data7);
            setMetricsData(data7);
            const totalMetricSum7 = data7.reduce((sum, item) => sum + item.totalMetric, 0);
            setTotalMetric(totalMetricSum7);
            const averageMetric7 = totalMetricSum7 / 7; // Calcula a média diária para 7 dias
            const averageMetricPercentage7 = (averageMetric7 / totalMetricSum7) * 100; // Calcula a média diária em porcentagem para 7 dias
            setAverageMetricPercentage(averageMetricPercentage7);
            setLoading(false); // Termina o carregamento dos 7 dias

            // Carrega os dados dos últimos 14 e 30 dias em segundo plano
            const [data14, data30] = await Promise.all([
                fetchTotalMetricsLastDays(14, metric),
                fetchTotalMetricsLastDays(30, metric)
            ]);
            setData14Days(data14);
            setData30Days(data30);
        };

        fetchData();
    }, [metric]); // Executa o efeito quando o componente é montado e quando a métrica muda

    useEffect(() => {
        let data;
        if (days === 7) {
            data = data7Days;
        } else if (days === 14) {
            data = data14Days;
        } else if (days === 30) {
            data = data30Days;
        }

        setMetricsData(data);
        const totalMetricSum = data.reduce((sum, item) => sum + item.totalMetric, 0);
        setTotalMetric(totalMetricSum);
        const averageMetric = totalMetricSum / days; // Calcula a média diária
        const averageMetricPercentage = (averageMetric / totalMetricSum) * 100; // Calcula a média diária em porcentagem
        setAverageMetricPercentage(averageMetricPercentage);
    }, [days, data7Days, data14Days, data30Days]); // Reexecuta o efeito quando o número de dias ou os dados mudam

    // Função para formatar o nome da métrica
    const formatMetricName = (metric) => {
        switch (metric) {
            case 'likeCount':
                return 'Likes';
            case 'repostCount':
                return 'Reposts';
            case 'replyCount':
                return 'Replies';
            case 'quoteCount':
                return 'Quotes';
            default:
                return 'Metric';
        }
    };

    // Verificação adicional para garantir que os dados estejam no formato correto
    const formattedMetricsData = metricsData.map(item => ({
        x: item.day,
        y: item.totalMetric
    }));

    return (
        <StyledInteractionsGraphic>
            <div className="cen_002">
                <div className='container'>
                    <div className="con_inf_gra">
                        <InteractionsCard
                            className={"grapgic Ite_Pad"}
                            description={formatMetricName(metric)} // Use a função para formatar o nome da métrica
                            number={totalMetric.toLocaleString()} // Formata o número com separadores de milhar
                            // spanValue={averageMetricPercentage.toFixed(2) + "%"}
                            // spanstyle={"styleUp"}
                            days={`for last ${days} days`}
                        />
                    <SelectGroup  days={days} setDays={setDays} metric={metric} setMetric={setMetric}/>
                    </div>
                    <div className="con_gra_int">
                        {loading ? (
                            <p>Loading...</p> // Mostra o indicador de carregamento
                        ) : (
                            <ApexChart data={formattedMetricsData} metric={metric} /> // Use o componente ApexChart
                        )}
                    </div>

                </div>
            </div>
        </StyledInteractionsGraphic>
    );
}