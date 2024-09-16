import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ApexChart from './ApexChart'; // Certifique-se de que o caminho está correto
import { StyledInteractionsGraphic } from './style.js';
import { InteractionsCard } from '../Interactions/InteractionsItem/index.jsx'; // Importação nomeada




const fetchTotalLikesLast7Days = async () => {
    const today = new Date();
    const likesData = [];
    const auth = localStorage.getItem('auth'); // Obter o auth do localStorage

    if (!auth) {
        console.error('Auth não encontrado no localStorage');
        return likesData;
    }

    const did = JSON.parse(auth).did; // Parse o auth para obter o did

    // Começar a contagem a partir de um dia antes do dia atual
    for (let i = 1; i <= 7; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() - i);
        const formattedDate = date.toISOString().split('T')[0];
        const displayDate = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;

        try {
            const response = await axios.get(`http://api.ojaum.live/feedbydate?did=${did}&date=${formattedDate}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': process.env.NEXT_PUBLIC_API_KEY
                }
            });

            if (response.data && response.data.postsInfo) {
                const totalLikes = response.data.postsInfo.reduce((sum, post) => sum + post.likeCount, 0);
                likesData.push({
                    day: displayDate,
                    totalLikes,
                    date: formattedDate // Adiciona a data ao objeto
                });
            } else {
                console.error(`No postsInfo data returned for date ${formattedDate}`);
            }
        } catch (error) {
            console.error(`Erro ao buscar likes para a data ${formattedDate}:`, error);
        }
    }

    // Ordenar os dados do mais antigo para o mais recente
    likesData.reverse();

    console.log('Likes Data:', likesData); // Adiciona log para verificar os dados de likes
    return likesData;
};

export function InteractionsGraphic() {
    const [likesData, setLikesData] = useState([]);
    const [totalLikes, setTotalLikes] = useState(0);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const data = await fetchTotalLikesLast7Days();
    //         console.log('Fetched Data:', data); // Adiciona log para verificar os dados buscados
    //         setLikesData(data);
    //     };

    //     fetchData();
    // }, []);

    const [averageLikesPercentage, setAverageLikesPercentage] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchTotalLikesLast7Days();
            console.log('Fetched Data:', data); // Adiciona log para verificar os dados buscados
            setLikesData(data);
            const totalLikesSum = data.reduce((sum, item) => sum + item.totalLikes, 0);
            setTotalLikes(totalLikesSum);
            const averageLikes = totalLikesSum / 7; // Calcula a média diária
            const averageLikesPercentage = (averageLikes / totalLikesSum) * 100; // Calcula a média diária em porcentagem
            setAverageLikesPercentage(averageLikesPercentage);
        };

        fetchData();
    }, []);

    return (
        <StyledInteractionsGraphic>
            <div className="cen_002">
                <div className='container'>
                    <div className="con_inf_gra">
                        <InteractionsCard
                            className={"grapgic Ite_Pad"}
                            description={"Likes"}
                            number={totalLikes.toLocaleString()} // Formata o número com separadores de milhLr
                            spanValue={averageLikesPercentage.toFixed(2) + "%"}
                            spanstyle={"styleUp"}
                            days={"for 7 last days"}
                        />
                    </div>
                    <div className="con_gra_int">
                        <ApexChart data={likesData} /> {/* Use o componente ApexChart */}
                    </div>
                </div>
            </div>
        </StyledInteractionsGraphic>
    );
}