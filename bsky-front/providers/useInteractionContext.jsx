// Funcionando

// import React, { createContext, useContext, useState } from 'react';

// // Cria o contexto
// const InteractionContext = createContext();

// // Hook para usar o contexto
// export const useInteractionContext = () => useContext(InteractionContext);

// // Componente provedor do contexto InteractionContext
// export const InteractionProvider = ({ children }) => {
//     // Define estados para várias métricas de interação
//     const [limit, setLimit] = useState(10); // Limite inicial de 10
//     const [totalLikes, setTotalLikes] = useState(0); // Total de curtidas
//     const [totalReplies, setTotalReplies] = useState(0); // Total de respostas
//     const [totalReposts, setTotalReposts] = useState(0); // Total de repostagens
//     const [totalQuotes, setTotalQuotes] = useState(0); // Total de citações
//     const [percentageLikes, setPercentageLikes] = useState(0); // Percentual de curtidas
//     const [percentageReplies, setPercentageReplies] = useState(0); // Percentual de respostas
//     const [percentageReposts, setPercentageReposts] = useState(0); // Percentual de repostagens
//     const [percentageQuotes, setPercentageQuotes] = useState(0); // Percentual de citações
//     const [averageLikes, setAverageLikes] = useState(0); // Média de curtidas
//     const [averageReplies, setAverageReplies] = useState(0); // Média de respostas
//     const [averageReposts, setAverageReposts] = useState(0); // Média de repostagens
//     const [averageQuotes, setAverageQuotes] = useState(0); // Média de citações
//     const [posts, setPosts] = useState([]); // Estado para armazenar os posts

//     // Retorna o provedor do contexto com os valores e setters dos estados
//     return (
//         <InteractionContext.Provider value={{
//             limit, setLimit,
//             totalLikes, setTotalLikes,
//             totalReplies, setTotalReplies,
//             totalReposts, setTotalReposts,
//             totalQuotes, setTotalQuotes,
//             percentageLikes, setPercentageLikes,
//             percentageReplies, setPercentageReplies,
//             percentageReposts, setPercentageReposts,
//             percentageQuotes, setPercentageQuotes,
//             averageLikes, setAverageLikes,
//             averageReplies, setAverageReplies,
//             averageReposts, setAverageReposts,
//             averageQuotes, setAverageQuotes,
//             posts, setPosts // Adiciona posts e setPosts ao contexto
//         }}>
//             {children} {/* Renderiza os componentes filhos */}
//         </InteractionContext.Provider>
//     );
// };

import React, { createContext, useContext, useState, useEffect } from 'react';
import { compareMetrics } from '../utils/utils';

// Cria o contexto
const InteractionContext = createContext();

// Hook para usar o contexto
export const useInteractionContext = () => useContext(InteractionContext);

// Componente provedor do contexto InteractionContext
export const InteractionProvider = ({ children }) => {
    // Define estados para várias métricas de interação

    // Estados para o período principal
    const [limit, setLimit] = useState(10); // Limite inicial de 10
    const [totalLikes, setTotalLikes] = useState(0); // Total de curtidas
    const [totalReplies, setTotalReplies] = useState(0); // Total de respostas
    const [totalReposts, setTotalReposts] = useState(0); // Total de repostagens
    const [totalQuotes, setTotalQuotes] = useState(0); // Total de citações
    const [percentageLikes, setPercentageLikes] = useState(0); // Percentual de curtidas
    const [percentageReplies, setPercentageReplies] = useState(0); // Percentual de respostas
    const [percentageReposts, setPercentageReposts] = useState(0); // Percentual de repostagens
    const [percentageQuotes, setPercentageQuotes] = useState(0); // Percentual de citações
    const [averageLikes, setAverageLikes] = useState(0); // Média de curtidas
    const [averageReplies, setAverageReplies] = useState(0); // Média de respostas
    const [averageReposts, setAverageReposts] = useState(0); // Média de repostagens
    const [averageQuotes, setAverageQuotes] = useState(0); // Média de citações
    const [posts, setPosts] = useState([]); // Estado para armazenar os posts
    const [postCount, setPostCount] = useState(0); // Contagem de posts

    // **Estados para o período de comparação**
    const [compareTotalLikes, setCompareTotalLikes] = useState(0);
    const [compareTotalReplies, setCompareTotalReplies] = useState(0);
    const [compareTotalReposts, setCompareTotalReposts] = useState(0);
    const [compareTotalQuotes, setCompareTotalQuotes] = useState(0);
    const [comparePercentageLikes, setComparePercentageLikes] = useState(0);
    const [comparePercentageReplies, setComparePercentageReplies] = useState(0);
    const [comparePercentageReposts, setComparePercentageReposts] = useState(0);
    const [comparePercentageQuotes, setComparePercentageQuotes] = useState(0);
    const [compareAverageLikes, setCompareAverageLikes] = useState(0);
    const [compareAverageReplies, setCompareAverageReplies] = useState(0);
    const [compareAverageReposts, setCompareAverageReposts] = useState(0);
    const [compareAverageQuotes, setCompareAverageQuotes] = useState(0);
    const [comparePosts, setComparePosts] = useState([]); // Estado para armazenar os posts de comparação
    const [comparePostCount, setComparePostCount] = useState(0); // Contagem de posts de comparação

    // Calculo Comparativo
    // Estados para armazenar as diferenças entre os períodos
    const [totalLikesDiff, setTotalLikesDiff] = useState(0);
    const [totalRepliesDiff, setTotalRepliesDiff] = useState(0);
    const [totalRepostsDiff, setTotalRepostsDiff] = useState(0);
    const [totalQuotesDiff, setTotalQuotesDiff] = useState(0);
    const [averageLikesDiff, setAverageLikesDiff] = useState(0);
    const [averageRepliesDiff, setAverageRepliesDiff] = useState(0);
    const [averageRepostsDiff, setAverageRepostsDiff] = useState(0);
    const [averageQuotesDiff, setAverageQuotesDiff] = useState(0);
    const [percentageLikesDiff, setPercentageLikesDiff] = useState(0);
    const [percentageRepliesDiff, setPercentageRepliesDiff] = useState(0);
    const [percentageRepostsDiff, setPercentageRepostsDiff] = useState(0);
    const [percentageQuotesDiff, setPercentageQuotesDiff] = useState(0);

    const [differences, setDifferences] = useState({});
    const [growth, setGrowth] = useState({});

    useEffect(() => {
        if (posts.length > 0 && comparePosts.length > 0) {
            const comparison = compareMetrics(posts, comparePosts);
            setDifferences(comparison.differences);
            setGrowth(comparison.growth);
        }
    }, [posts, comparePosts]);

    // Retorna o provedor do contexto com os valores e setters dos estados
    return (
        <InteractionContext.Provider value={{
            // Estados do período principal
            limit, setLimit,
            totalLikes, setTotalLikes,
            totalReplies, setTotalReplies,
            totalReposts, setTotalReposts,
            totalQuotes, setTotalQuotes,
            percentageLikes, setPercentageLikes,
            percentageReplies, setPercentageReplies,
            percentageReposts, setPercentageReposts,
            percentageQuotes, setPercentageQuotes,
            averageLikes, setAverageLikes,
            averageReplies, setAverageReplies,
            averageReposts, setAverageReposts,
            averageQuotes, setAverageQuotes,
            posts, setPosts,
            postCount, setPostCount,

            // **Estados do período de comparação**
            compareTotalLikes, setCompareTotalLikes,
            compareTotalReplies, setCompareTotalReplies,
            compareTotalReposts, setCompareTotalReposts,
            compareTotalQuotes, setCompareTotalQuotes,
            comparePercentageLikes, setComparePercentageLikes,
            comparePercentageReplies, setComparePercentageReplies,
            comparePercentageReposts, setComparePercentageReposts,
            comparePercentageQuotes, setComparePercentageQuotes,
            compareAverageLikes, setCompareAverageLikes,
            compareAverageReplies, setCompareAverageReplies,
            compareAverageReposts, setCompareAverageReposts,
            compareAverageQuotes, setCompareAverageQuotes,
            comparePosts, setComparePosts,
            comparePostCount, setComparePostCount,

            totalLikesDiff, setTotalLikesDiff,
            totalRepliesDiff, setTotalRepliesDiff,
            totalRepostsDiff, setTotalRepostsDiff,
            totalQuotesDiff, setTotalQuotesDiff,
            percentageLikesDiff, setPercentageLikesDiff,
            percentageRepliesDiff, setPercentageRepliesDiff,
            percentageRepostsDiff, setPercentageRepostsDiff,
            percentageQuotesDiff, setPercentageQuotesDiff,
            averageLikesDiff, setAverageLikesDiff,
            averageRepliesDiff, setAverageRepliesDiff,
            averageRepostsDiff, setAverageRepostsDiff,
            averageQuotesDiff, setAverageQuotesDiff,
        }}>
            {children} {/* Renderiza os componentes filhos */}
        </InteractionContext.Provider>
    );
};