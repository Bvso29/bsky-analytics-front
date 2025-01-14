


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { StyledCen002, StyledTex001, StyledTex002, StyledTit001, StyledTit002 } from "../../../style/variaveis";
import { Aside } from "../Aside";
import { Interactions } from "../Interactions/index.jsx";
import { InteractionsGraphic } from "../InteractionsGraphic/index.jsx";
import { StyledContainer } from "./style";
import { InteractionProvider, useInteractionContext } from '../../../providers/useInteractionContext';
import MyDatePicker from '../DatePicker';
import CircularGraphic from '../CircularGraphic';
import { calculateTotal, calculateAverage, calculatePercentage, formatNumber } from '../../../utils/utils.js'; // Importando as funções utilitárias
import { OtherNumbers } from '../OtherNumbers';
import { fetchPostsByDate } from '@/api/postDataService';
import { fetchPostsByPeriod } from '@/api/postPeriodService';
import { fetchPosts } from '@/api/postService';
import { updatePostStatistics } from '../../../utils/postUtils';


export function DashboardContent() {
    const [userData, setUserData] = useState(null);
    const {
        limit,
        setLimit,
        setTotalLikes,
        setTotalReplies,
        setTotalReposts,
        setTotalQuotes,
        setPercentageLikes,
        setPercentageReplies,
        setPercentageReposts,
        setPercentageQuotes,
        setAverageLikes,
        setAverageReplies,
        setAverageReposts,
        setAverageQuotes,
        percentageLikes,
        percentageReplies,
        percentageReposts,
        percentageQuotes,
        averageLikes,
        averageReplies,
        averageReposts,
        averageQuotes,
        totalLikes,
        totalReplies,
        totalReposts,
        totalQuotes
    } = useInteractionContext();
    const [posts, setPosts] = useState([]);
    const [startDate, setStartDate] = useState(''); // Inicializar como string vazia
    const [endDate, setEndDate] = useState(''); // Inicializar como string vazia
    const [postCount, setPostCount] = useState(0); // Estado para armazenar o número de posts no período


    // data sepecifica
    const [date, setDate] = useState('');



    // Verifica se tem LocalStorage (DID)
    useEffect(() => {
        const storedAuth = localStorage.getItem('auth');
        if (storedAuth) {
            const authData = JSON.parse(storedAuth);
            setUserData(authData);
        } else {
            console.error('No auth data found in localStorage');
        }
    }, []);


    useEffect(() => {
        fetchPosts(userData, limit, setPosts, setPostCount, setTotalLikes, setTotalReplies, setTotalReposts, setTotalQuotes, setPercentageLikes, setPercentageReplies, setPercentageReposts, setPercentageQuotes, setAverageLikes, setAverageReplies, setAverageReposts, setAverageQuotes);
    }, [userData, limit]);


    useEffect(() => {
        updatePostStatistics(posts, setTotalLikes, setTotalReplies, setTotalReposts, setTotalQuotes, setAverageLikes, setAverageReplies, setAverageReposts, setAverageQuotes, setPercentageLikes, setPercentageReplies, setPercentageReposts, setPercentageQuotes);
    }, [posts]);


    // Chama a função fetchPostsByPeriod quando necessário
    useEffect(() => {
        if (userData && startDate && endDate) {
            fetchPostsByPeriod(userData, startDate, endDate, setPosts, setPostCount, setDate);
        }
    }, [userData, startDate, endDate]);
    if (!userData) {
        return <div>Loading...</div>;
    }

    return (

        <StyledContainer>
            <div className="Con_Men">
                <Aside userData={userData} />
            </div>
            <main className="Con_Con">
                <StyledCen002>
                    <div className="Filtro">

                        <MyDatePicker userData={userData} />
                    </div>
                </StyledCen002>
                <Interactions />
                <StyledCen002>
                    <div className="Con_Con_Gra">
                        <InteractionsGraphic />
                        <CircularGraphic
                            percentageLikes={percentageLikes}
                            percentageReplies={percentageReplies}
                            percentageReposts={percentageReposts}
                            percentageQuotes={percentageQuotes}
                        />
                    </div>
                </StyledCen002>
            </main>
        </StyledContainer>
    );
};

