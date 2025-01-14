import React, { useEffect, useState } from 'react';
import ApexChart from './ApexChart';
import fetchTotalLikesLast7Days from './fetchTotalLikesLast7Days';

const LikesChartContainer = () => {
    const [likesData, setLikesData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchTotalLikesLast7Days();
            setLikesData(data);
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Gráfico de Likes dos Últimos 7 Dias</h1>
            <ApexChart data={likesData} />
        </div>
    );
};

export default LikesChartContainer;