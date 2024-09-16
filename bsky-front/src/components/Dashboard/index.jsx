
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { StyledCen002, StyledTex001, StyledTex002, StyledTit001, StyledTit002 } from "@/app/variaveis";
import { Aside } from "../Aside";
import CircularGraphic from "./CircularGraphic";
import { Interactions } from "./Interactions";
import { InteractionsGraphic } from "./InteractionsGraphic";
import { StyledContainer } from "./style";
import InputPad from '../fragments/Input/index.jsx';
import { InteractionProvider, useInteractionContext } from '../../../providers/useInteractionContext';
import ButtonPad from '../fragments/Button/index.jsx';

const DashboardContent = () => {
    const [userData, setUserData] = useState(null);
    const { limit, setLimit, setTotalLikes, setTotalReplies, setTotalReposts, setTotalQuotes, setPercentageLikes, setPercentageReplies, setPercentageReposts, setPercentageQuotes, setAverageLikes, setAverageReplies, setAverageReposts, setAverageQuotes, percentageLikes, percentageReplies, percentageReposts, percentageQuotes, averageLikes, averageReplies, averageReposts, averageQuotes, totalLikes, totalReplies, totalReposts, totalQuotes } = useInteractionContext();
    const [posts, setPosts] = useState([]);
    const [startDate, setStartDate] = useState(''); // Inicializar como string vazia
    const [endDate, setEndDate] = useState(''); // Inicializar como string vazia
    const [postCount, setPostCount] = useState(0); // Estado para armazenar o número de posts no período

    // data sepecifica
    const [date, setDate] = useState('');

    const handleInputChange = (e) => {
        setDate(e.target.value);
    };

    const fetchPostsByDate = async () => {
        if (userData && date) { // Usar a variável 'date' definida no estado
            try {
                const response = await axios.get(`http://api.ojaum.live/feedbydate?did=${userData.did}&date=${date}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'x-api-key': process.env.NEXT_PUBLIC_API_KEY
                    }
                });

                if (response.data && response.data.postsInfo) {
                    const validPosts = response.data.postsInfo.map(post => ({
                        likeCount: post.likeCount || 0,
                        replyCount: post.replyCount || 0,
                        repostCount: post.repostCount || 0,
                        quoteCount: post.quoteCount || 0
                    }));

                    setPosts(validPosts); // Atualiza o estado dos posts
                    setPostCount(validPosts.length); // Atualiza o número de posts, se necessário

                    // Redefinir os valores dos inputs de período
                    setStartDate('');
                    setEndDate('');

                    // A lógica de cálculos será feita no useEffect que observa o 'posts'
                }
            } catch (error) {
                console.error('Erro ao buscar posts por data específica:', error);
            }
        } else {
            console.error('Data específica deve ser fornecida');
        }
    };

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
        const fetchPosts = async () => {
            if (userData) {
                try {
                    const response = await axios.get(`http://api.ojaum.live/feed?did=${userData.did}&limit=${limit}`, {
                        headers: {
                            'Content-Type': 'application/json',
                            'x-api-key': process.env.NEXT_PUBLIC_API_KEY // Acessa a variável de ambiente
                        }
                    });

                    if (response.data && response.data.postsInfo) {
                        // Verificar se cada post tem as propriedades necessárias
                        const validPosts = response.data.postsInfo.map(post => ({
                            likeCount: post.likeCount || 0,
                            replyCount: post.replyCount || 0,
                            repostCount: post.repostCount || 0,
                            quoteCount: post.quoteCount || 0
                        }));
                        setPosts(validPosts);
                        setPostCount(validPosts.length); // Atualizar o estado com o número de posts

                        // Calcular as somas das propriedades
                        const totalLikes = calculateTotal(validPosts, 'likeCount');
                        const totalReplies = calculateTotal(validPosts, 'replyCount');
                        const totalReposts = calculateTotal(validPosts, 'repostCount');
                        const totalQuotes = calculateTotal(validPosts, 'quoteCount');

                        // Calcular o total de interações
                        const totalInteractions = totalLikes + totalReplies + totalReposts + totalQuotes;

                        // Calcular as médias das propriedades
                        const averageLikes = calculateAverage(validPosts, 'likeCount');
                        const averageReplies = calculateAverage(validPosts, 'replyCount');
                        const averageReposts = calculateAverage(validPosts, 'repostCount');
                        const averageQuotes = calculateAverage(validPosts, 'quoteCount');

                        // Calcular as porcentagens das propriedades
                        const percentageLikes = calculatePercentage(totalLikes, totalInteractions);
                        const percentageReplies = calculatePercentage(totalReplies, totalInteractions);
                        const percentageReposts = calculatePercentage(totalReposts, totalInteractions);
                        const percentageQuotes = calculatePercentage(totalQuotes, totalInteractions);

                        // Atualizar o contexto com os novos valores
                        setTotalLikes(totalLikes);
                        setTotalReplies(totalReplies);
                        setTotalReposts(totalReposts);
                        setTotalQuotes(totalQuotes);
                        setPercentageLikes(percentageLikes);
                        setPercentageReplies(percentageReplies);
                        setPercentageReposts(percentageReposts);
                        setPercentageQuotes(percentageQuotes);
                        setAverageLikes(averageLikes);
                        setAverageReplies(averageReplies);
                        setAverageReposts(averageReposts);
                        setAverageQuotes(averageQuotes);
                    } else {
                        console.error('No posts data returned from API');
                    }
                } catch (error) {
                    console.error('Erro ao buscar posts:', error);
                }
            }
        };

        fetchPosts();
    }, [userData, limit]);

    useEffect(() => {
        if (posts.length > 0) {
            // Calcular total de interações
            const totalLikes = calculateTotal(posts, 'likeCount');
            const totalReplies = calculateTotal(posts, 'replyCount');
            const totalReposts = calculateTotal(posts, 'repostCount');
            const totalQuotes = calculateTotal(posts, 'quoteCount');

            const totalInteractions = totalLikes + totalReplies + totalReposts + totalQuotes;

            // Atualizar estados globais
            setTotalLikes(totalLikes);
            setTotalReplies(totalReplies);
            setTotalReposts(totalReposts);
            setTotalQuotes(totalQuotes);

            setAverageLikes(posts.length ? totalLikes / posts.length : 0);
            setAverageReplies(posts.length ? totalReplies / posts.length : 0);
            setAverageReposts(posts.length ? totalReposts / posts.length : 0);
            setAverageQuotes(posts.length ? totalQuotes / posts.length : 0);

            setPercentageLikes(totalInteractions ? (totalLikes / totalInteractions) * 100 : 0);
            setPercentageReplies(totalInteractions ? (totalReplies / totalInteractions) * 100 : 0);
            setPercentageReposts(totalInteractions ? (totalReposts / totalInteractions) * 100 : 0);
            setPercentageQuotes(totalInteractions ? (totalQuotes / totalInteractions) * 100 : 0);
        }
    }, [posts]); // Executa sempre que o estado de posts for atualizado

    const fetchPostsByPeriod = async () => {
        if (userData && startDate && endDate) {
            try {
                const response = await axios.get(`http://api.ojaum.live/feedbyperiod?did=${userData.did}&startDate=${startDate}&endDate=${endDate}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'x-api-key': process.env.NEXT_PUBLIC_API_KEY
                    }
                });


                if (response.data && response.data.postsInfo) {
                    const validPosts = response.data.postsInfo.map(post => ({
                        likeCount: post.likeCount || 0,
                        replyCount: post.replyCount || 0,
                        repostCount: post.repostCount || 0,
                        quoteCount: post.quoteCount || 0
                    }));

                    setPosts(validPosts);
                    setPostCount(validPosts.length); // Atualizar o número de posts

                    // Redefinir o valor do input de data específica
                    setDate('');

                    // Você pode remover os cálculos daqui e movê-los para o useEffect, como sugerido acima.
                }
            } catch (error) {
                console.error('Erro ao buscar posts por período:', error);
            }
        } else {
            console.error('Start date and end date must be provided');
        }
    };

    if (!userData) {
        return <div>Loading...</div>;
    }


    // Função genérica para calcular a soma de uma propriedade
    const calculateTotal = (posts, property) => {
        return posts.reduce((sum, post) => sum + post[property], 0);
    };

    // Função genérica para calcular a média de uma propriedade
    const calculateAverage = (posts, property) => {
        const total = calculateTotal(posts, property);
        return posts.length > 0 ? total / posts.length : 0;
    };

    // Função para calcular a porcentagem
    const calculatePercentage = (value, total) => {
        return total > 0 ? (value / total) * 100 : 0;
    };

    // Função para formatar números com separadores de milhares e duas casas decimais
    const formatNumber = (number) => {
        if (number === undefined || number === null) {
            return '0.00';
        }
        return new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(number);
    };

    return (
        <StyledContainer>
            <div className="Con_Men">
                <Aside userData={userData} />
            </div>
            <main className="Con_Con">
                <StyledCen002>

                    <div className="Filtro">
                        <div className="Periodo">
                            <div className="Filtros">
                                <InputPad
                                    type="date"
                                    id="startDate"
                                    label={"Data de Início"}
                                    value={startDate}
                                    onChange={(e) => setStartDate(e.target.value)}
                                />
                                <InputPad
                                    type="date"
                                    id="endDate"
                                    label={"Data de Fim"}
                                    value={endDate}
                                    onChange={(e) => setEndDate(e.target.value)}
                                />
                            </div>
                            <ButtonPad onClick={fetchPostsByPeriod} text={"Periodo especifico"} />
                        </div>

                        <div className='Dia'>
                            <div className="Filtros">

                                <InputPad
                                    type="number"
                                    id="postLimit"
                                    min="1"
                                    label={"Limite de posts"}
                                    value={limit !== null ? limit : ''} // Se o limite for null, exibe uma string vazia
                                    placeholder="Sem limite" // Placeholder para indicar "sem limite"
                                    onChange={(e) => setLimit(Number(e.target.value) || null)} // Se o valor for 0, define como null
                                />
                                <InputPad
                                    type="date"
                                    id="date-input"
                                    label={"Dia especifico"}
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                />
                            </div>
                            <ButtonPad onClick={fetchPostsByDate} text={"Data especifica"}></ButtonPad>
                        </div>

                    </div>
                </StyledCen002>

                <div className='Qtd_Tot'>
                    <StyledTit002>Quantidade de Posts Retornados: {postCount}</StyledTit002>
                </div>

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
                <div className='Inf_Uti'>
                    <StyledTex002>Total de Likes: {totalLikes.toLocaleString('pt-BR')}</StyledTex002>
                    <StyledTex002>Total de Replies: {totalReplies.toLocaleString('pt-BR')}</StyledTex002>
                    <StyledTex002>Total de Reposts: {totalReposts.toLocaleString('pt-BR')}</StyledTex002>
                    <StyledTex002>Total de Quotes: {totalQuotes.toLocaleString('pt-BR')}</StyledTex002>
                    <StyledTex002>Média de Likes por Post: {formatNumber(averageLikes)}</StyledTex002>
                    <StyledTex002>Média de Replies por Post: {formatNumber(averageReplies)}</StyledTex002>
                    <StyledTex002>Média de Reposts por Post: {formatNumber(averageReposts)}</StyledTex002>
                    <StyledTex002>Média de Quotes por Post: {formatNumber(averageQuotes)}</StyledTex002>
                    <StyledTex002>Porcentagem de Likes: {formatNumber(percentageLikes)}%</StyledTex002>
                    <StyledTex002>Porcentagem de Replies: {formatNumber(percentageReplies)}%</StyledTex002>
                    <StyledTex002>Porcentagem de Reposts: {formatNumber(percentageReposts)}%</StyledTex002>
                    <StyledTex002>Porcentagem de Quotes: {formatNumber(percentageQuotes)}%</StyledTex002>
                </div>
            </main>
        </StyledContainer>
    );
};

export function Dashboard() {
    return (
        <InteractionProvider>
            <DashboardContent />
        </InteractionProvider>
    );
}
