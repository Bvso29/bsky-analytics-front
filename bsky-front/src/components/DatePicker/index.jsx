// import React, { useState } from 'react';
// import 'react-datepicker/dist/react-datepicker.css';
// import Datepicker from 'react-tailwindcss-datepicker';
// import { StyledDiv } from './style';

// const MyDatePicker = () => {
//     const [value, setValue] = useState({
//         startDate: null,
//         endDate: null
//     });

//     return (
//         <StyledDiv>
//             <Datepicker
//                 showShortcuts={true}
//                 showFooter={true}
//                 value={value}
//                 onChange={newValue => setValue(newValue)}
//             />
//         </StyledDiv>
//     );

// };

// export default MyDatePicker;


// import React, { useState, useEffect, useContext } from 'react';
// import 'react-datepicker/dist/react-datepicker.css';
// import Datepicker from 'react-tailwindcss-datepicker';
// import { StyledDiv } from './style';
// import { fetchPostsByPeriod, fetchPostsByDate } from '../../api/postDataService'; // Importa as funções do arquivo postService.js
// import { useInteractionContext } from '../../../providers/useInteractionContext'; // Importa o contexto
// import { calculateMetrics } from '../../../utils/utils'; // Importa as funções utilitárias

// const MyDatePicker = ({ userData }) => {
//     const [value, setValue] = useState({
//         startDate: null,
//         endDate: null,
//         specificDate: null // Adiciona specificDate ao estado
//     });

//     const {
//         posts = [], // Inicializa posts como um array vazio
//         setPosts,
//         setPostCount,
//         setTotalLikes,
//         setTotalReplies,
//         setTotalReposts,
//         setTotalQuotes,
//         setPercentageLikes,
//         setPercentageReplies,
//         setPercentageReposts,
//         setPercentageQuotes,
//         setAverageLikes,
//         setAverageReplies,
//         setAverageReposts,
//         setAverageQuotes
//     } = useInteractionContext(); // Usa o contexto para acessar os estados e funções de atualização

//     useEffect(() => {
//         if (value.startDate && value.endDate) {
//             console.log('Fetching posts for period:', value.startDate, value.endDate);
//             fetchPostsByPeriod(
//                 userData,
//                 value.startDate,
//                 value.endDate,
//                 setPosts,
//                 setPostCount,
//                 () => {} // Placeholder para setDate, se necessário
//             );
//         }
//     }, [value.startDate, value.endDate, userData]);

//     useEffect(() => {
//         if (value.specificDate) {
//             console.log('Fetching posts for specific date:', value.specificDate);
//             fetchPostsByDate(
//                 userData,
//                 value.specificDate,
//                 setPosts,
//                 setPostCount,
//                 () => {} // Placeholder para setDate, se necessário
//             );
//         }
//     }, [value.specificDate, userData]);

//     useEffect(() => {
//         if (posts && posts.length > 0) { // Verifica se posts não é indefinido e tem elementos
//             console.log('Calculating metrics for posts:', posts);
//             const metrics = calculateMetrics(posts);

//             setTotalLikes(metrics.totalLikes);
//             setTotalReplies(metrics.totalReplies);
//             setTotalReposts(metrics.totalReposts);
//             setTotalQuotes(metrics.totalQuotes);

//             setAverageLikes(metrics.averageLikes);
//             setAverageReplies(metrics.averageReplies);
//             setAverageReposts(metrics.averageReposts);
//             setAverageQuotes(metrics.averageQuotes);

//             setPercentageLikes(metrics.percentageLikes);
//             setPercentageReplies(metrics.percentageReplies);
//             setPercentageReposts(metrics.percentageReposts);
//             setPercentageQuotes(metrics.percentageQuotes);
//         }
//     }, [posts]);

//     return (
//         <StyledDiv>
//             <Datepicker
//                 showShortcuts={true}
//                 showFooter={true}
//                 value={value}
//                 onChange={newValue => {
//                     console.log('Datepicker value changed:', newValue);
//                     setValue(newValue);
//                 }}
//             />
//         </StyledDiv>
//     );
// };

// export default MyDatePicker;

// Funcionando
// import React, { useState, useEffect, useContext } from 'react';
// import 'react-datepicker/dist/react-datepicker.css';
// import Datepicker from 'react-tailwindcss-datepicker';
// import { StyledDiv } from './style';
// import { fetchPostsByPeriod } from '../../api/postPeriodService'; // Importa a função do arquivo postPeriodService.js
// import { useInteractionContext } from '../../../providers/useInteractionContext'; // Importa o contexto
// import { calculateMetrics } from '../../../utils/utils'; // Importa as funções utilitárias

// const MyDatePicker = ({ userData }) => {
//     const [value, setValue] = useState({
//         startDate: null,
//         endDate: null
//     });

//     const {
//         posts = [], // Inicializa posts como um array vazio
//         setPosts,
//         setPostCount,
//         setTotalLikes,
//         setTotalReplies,
//         setTotalReposts,
//         setTotalQuotes,
//         setPercentageLikes,
//         setPercentageReplies,
//         setPercentageReposts,
//         setPercentageQuotes,
//         setAverageLikes,
//         setAverageReplies,
//         setAverageReposts,
//         setAverageQuotes
//     } = useInteractionContext(); // Usa o contexto para acessar os estados e funções de atualização

//     useEffect(() => {
//         if (value.startDate && value.endDate) {
//             console.log('Fetching posts for period:', value.startDate, value.endDate);
//             fetchPostsByPeriod(
//                 userData,
//                 value.startDate,
//                 value.endDate,
//                 setPosts,
//                 setPostCount,
//                 () => {} // Placeholder para setDate, se necessário
//             );
//         }
//     }, [value.startDate, value.endDate, userData]);

//     useEffect(() => {
//         if (posts && posts.length > 0) { // Verifica se posts não é indefinido e tem elementos
//             console.log('Calculating metrics for posts:', posts);
//             const metrics = calculateMetrics(posts);

//             setTotalLikes(metrics.totalLikes);
//             setTotalReplies(metrics.totalReplies);
//             setTotalReposts(metrics.totalReposts);
//             setTotalQuotes(metrics.totalQuotes);

//             setAverageLikes(metrics.averageLikes);
//             setAverageReplies(metrics.averageReplies);
//             setAverageReposts(metrics.averageReposts);
//             setAverageQuotes(metrics.averageQuotes);

//             setPercentageLikes(metrics.percentageLikes);
//             setPercentageReplies(metrics.percentageReplies);
//             setPercentageReposts(metrics.percentageReposts);
//             setPercentageQuotes(metrics.percentageQuotes);
//         }
//     }, [posts]);

//     return (
//         <StyledDiv>
//             <Datepicker
//                 showShortcuts={true}
//                 showFooter={true}
//                 value={value}
//                 onChange={newValue => {
//                     console.log('Datepicker value changed:', newValue);
//                     setValue(newValue);
//                 }}
//             />

//         </StyledDiv>
//     );
// };

// export default MyDatePicker;
// import React, { useState, useEffect, useContext } from 'react';
// import 'react-datepicker/dist/react-datepicker.css';
// import Datepicker from 'react-tailwindcss-datepicker';
// import { StyledDiv } from './style';
// import { fetchPostsByPeriod } from '../../api/postPeriodService'; // Importa a função do arquivo postPeriodService.js
// import { useInteractionContext } from '../../../providers/useInteractionContext'; // Importa o contexto
// import { calculateMetrics } from '../../../utils/utils'; // Importa as funções utilitárias

// const MyDatePicker = ({ userData }) => {
//     const [value, setValue] = useState({
//         startDate: null,
//         endDate: null
//     });

//     // Segundo Periodo - Comprativo
//     const [compareValue, setCompareValue] = useState({
//         compareStartDate: null,
//         compareEndDate: null
//     });

//     const {
//         posts = [], // Inicializa posts como um array vazio
//         setPosts,
//         setPostCount,
//         setTotalLikes,
//         setTotalReplies,
//         setTotalReposts,
//         setTotalQuotes,
//         setPercentageLikes,
//         setPercentageReplies,
//         setPercentageReposts,
//         setPercentageQuotes,
//         setAverageLikes,
//         setAverageReplies,
//         setAverageReposts,
//         setAverageQuotes
//     } = useInteractionContext(); // Usa o contexto para acessar os estados e funções de atualização

//     useEffect(() => {
//         if (value.startDate && value.endDate) {
//             console.log('Fetching posts for period:', value.startDate, value.endDate);
//             fetchPostsByPeriod(
//                 userData,
//                 value.startDate,
//                 value.endDate,
//                 setPosts,
//                 setPostCount,
//                 () => { } // Placeholder para setDate, se necessário
//             );
//         }

//         if (compareValue.compareStartDate && compareValue.compareEndDate) {
//             console.log('Fetching posts for comparison period:', compareValue.compareStartDate, compareValue.compareEndDate);
//             fetchPostsByPeriod(
//                 userData,
//                 compareValue.compareStartDate,
//                 compareValue.compareEndDate,
//                 setComparePosts, // Novo estado para armazenar os posts do período de comparação
//                 setComparePostCount,
//                 () => { } // Placeholder
//             );
//         }
//     }, [value.startDate, value.endDate, compareValue.compareStartDate, compareValue.compareEndDate, userData]);


//     useEffect(() => {
//         if (posts && posts.length > 0) { // Verifica se posts não é indefinido e tem elementos
//             console.log('Calculating metrics for posts:', posts);
//             const metrics = calculateMetrics(posts);

//             setTotalLikes(metrics.totalLikes);
//             setTotalReplies(metrics.totalReplies);
//             setTotalReposts(metrics.totalReposts);
//             setTotalQuotes(metrics.totalQuotes);

//             setAverageLikes(metrics.averageLikes);
//             setAverageReplies(metrics.averageReplies);
//             setAverageReposts(metrics.averageReposts);
//             setAverageQuotes(metrics.averageQuotes);

//             setPercentageLikes(metrics.percentageLikes);
//             setPercentageReplies(metrics.percentageReplies);
//             setPercentageReposts(metrics.percentageReposts);
//             setPercentageQuotes(metrics.percentageQuotes);
//         }
//     }, [posts]);

//     // métricas de comparação
//     useEffect(() => {
//         if (comparePosts && comparePosts.length > 0) {
//             console.log('Calculating metrics for comparison posts:', comparePosts);
//             const compareMetrics = calculateMetrics(comparePosts);

//             setCompareTotalLikes(compareMetrics.totalLikes);
//             setCompareTotalReplies(compareMetrics.totalReplies);
//             setCompareTotalReposts(compareMetrics.totalReposts);
//             setCompareTotalQuotes(compareMetrics.totalQuotes);

//             setCompareAverageLikes(compareMetrics.averageLikes);
//             setCompareAverageReplies(compareMetrics.averageReplies);
//             setCompareAverageReposts(compareMetrics.averageReposts);
//             setCompareAverageQuotes(compareMetrics.averageQuotes);

//             setComparePercentageLikes(compareMetrics.percentageLikes);
//             setComparePercentageReplies(compareMetrics.percentageReplies);
//             setComparePercentageReposts(compareMetrics.percentageReposts);
//             setComparePercentageQuotes(compareMetrics.percentageQuotes);
//         }
//     }, [comparePosts]);

//     return (
//         <StyledDiv>
//             <Datepicker
//                 showShortcuts={true}
//                 showFooter={true}
//                 value={value}
//                 onChange={newValue => {
//                     console.log('Datepicker value changed:', newValue);
//                     setValue(newValue);
//                 }}
//             />

//             <Datepicker
//                 showShortcuts={true}
//                 showFooter={true}
//                 value={compareValue}
//                 onChange={newCompareValue => {
//                     console.log('Comparison Datepicker value changed:', newCompareValue);
//                     setCompareValue(newCompareValue);
//                 }}
//             />
//         </StyledDiv>

//     );
// };

// export default MyDatePicker;
import React, { useState, useEffect } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import Datepicker from 'react-tailwindcss-datepicker';
import { StyledDiv } from './style';
import { fetchPostsByComparePeriod, fetchPostsByPeriod } from '../../api/postPeriodService'; // Importa a função do arquivo postPeriodService.js
import { useInteractionContext } from '../../../providers/useInteractionContext'; // Importa o contexto
import { calculateDifference, calculateMetrics } from '../../../utils/utils'; // Importa as funções utilitárias
import { StyledTex002 } from '../../../style/variaveis';

// const MyDatePicker = ({ userData }) => {
//     const [value, setValue] = useState({
//         startDate: null,
//         endDate: null
//     });

//     // Segundo Período - Comparativo
//     const [compareValue, setCompareValue] = useState({
//         compareStartDate: null,
//         compareEndDate: null
//     });

//     const {
//         posts = [], // Inicializa posts como um array vazio
//         setPosts,
//         setPostCount,
//         setTotalLikes,
//         setTotalReplies,
//         setTotalReposts,
//         setTotalQuotes,
//         setPercentageLikes,
//         setPercentageReplies,
//         setPercentageReposts,
//         setPercentageQuotes,
//         setAverageLikes,
//         setAverageReplies,
//         setAverageReposts,
//         setAverageQuotes,
//         // Adiciona estados para o período de comparação
//         setCompareTotalLikes,
//         setCompareTotalReplies,
//         setCompareTotalReposts,
//         setCompareTotalQuotes,
//         setComparePercentageLikes,
//         setComparePercentageReplies,
//         setComparePercentageReposts,
//         setComparePercentageQuotes,
//         setCompareAverageLikes,
//         setCompareAverageReplies,
//         setCompareAverageReposts,
//         setCompareAverageQuotes
//     } = useInteractionContext(); // Usa o contexto para acessar os estados e funções de atualização

//     // Estados para armazenar os dados do período comparativo
//     const [comparePosts, setComparePosts] = useState([]);
//     const [comparePostCount, setComparePostCount] = useState(0);

//     // Função para garantir que a data está no formato correto
//     const formatDate = (date) => date ? new Date(date).toISOString().split('T')[0] : null;

//     // Carregar posts do período principal
//     useEffect(() => {
//         if (value.startDate && value.endDate) {
//             console.log('Fetching posts for period:', formatDate(value.startDate), formatDate(value.endDate));
//             fetchPostsByPeriod(
//                 userData,
//                 formatDate(value.startDate),
//                 formatDate(value.endDate),
//                 setPosts,
//                 setPostCount,
//                 () => {} // Placeholder para setDate, se necessário
//             );
//         }
//     }, [value.startDate, value.endDate, userData]);

//     // Carregar posts do período de comparação
//     useEffect(() => {
//         if (compareValue.compareStartDate && compareValue.compareEndDate) {
//             console.log('Fetching posts for comparison period:', formatDate(compareValue.compareStartDate), formatDate(compareValue.compareEndDate));
//             fetchPostsByComparePeriod(
//                 userData,
//                 formatDate(compareValue.compareStartDate),
//                 formatDate(compareValue.compareEndDate),
//                 setComparePosts, // Armazena os posts do período de comparação
//                 setComparePostCount,
//                 () => {} // Placeholder
//             );
//         }
//     }, [compareValue.compareStartDate, compareValue.compareEndDate, userData]);

//     // Métricas do período principal
//     useEffect(() => {
//         if (posts && posts.length > 0) { // Verifica se posts não é indefinido e tem elementos
//             console.log('Calculating metrics for posts:', posts);
//             const metrics = calculateMetrics(posts);

//             setTotalLikes(metrics.totalLikes);
//             setTotalReplies(metrics.totalReplies);
//             setTotalReposts(metrics.totalReposts);
//             setTotalQuotes(metrics.totalQuotes);

//             setAverageLikes(metrics.averageLikes);
//             setAverageReplies(metrics.averageReplies);
//             setAverageReposts(metrics.averageReposts);
//             setAverageQuotes(metrics.averageQuotes);

//             setPercentageLikes(metrics.percentageLikes);
//             setPercentageReplies(metrics.percentageReplies);
//             setPercentageReposts(metrics.percentageReposts);
//             setPercentageQuotes(metrics.percentageQuotes);
//         }
//     }, [posts]);

//     // Métricas do período comparativo
//     useEffect(() => {
//         if (comparePosts && comparePosts.length > 0) {
//             console.log('Calculating metrics for comparison posts:', comparePosts);
//             const compareMetrics = calculateMetrics(comparePosts);

//             // Atualiza as métricas para o período comparativo
//             setCompareTotalLikes(compareMetrics.totalLikes);
//             setCompareTotalReplies(compareMetrics.totalReplies);
//             setCompareTotalReposts(compareMetrics.totalReposts);
//             setCompareTotalQuotes(compareMetrics.totalQuotes);

//             setCompareAverageLikes(compareMetrics.averageLikes);
//             setCompareAverageReplies(compareMetrics.averageReplies);
//             setCompareAverageReposts(compareMetrics.averageReposts);
//             setCompareAverageQuotes(compareMetrics.averageQuotes);

//             setComparePercentageLikes(compareMetrics.percentageLikes);
//             setComparePercentageReplies(compareMetrics.percentageReplies);
//             setComparePercentageReposts(compareMetrics.percentageReposts);
//             setComparePercentageQuotes(compareMetrics.percentageQuotes);
//         }
//     }, [comparePosts]);

//     return (
//         <StyledDiv>
//             <Datepicker
//                 showShortcuts={true}
//                 showFooter={true}
//                 value={value}
//                 onChange={newValue => {
//                     console.log('Datepicker value changed:', newValue);
//                     setValue(newValue);
//                 }}
//             />

//             <Datepicker
//                 showShortcuts={true}
//                 showFooter={true}
//                 value={compareValue}
//                 onChange={newCompareValue => {
//                     console.log('Comparison Datepicker value changed:', newCompareValue);
//                     setCompareValue(newCompareValue);
//                 }}
//             />
//         </StyledDiv>
//     );
// };

const MyDatePicker = ({ userData }) => {
    const [value, setValue] = useState({
        startDate: null,
        endDate: null
    });

    // Segundo Período - Comparativo
    const [compareValue, setCompareValue] = useState({
        startDate: null,
        endDate: null
    });

    const {
        posts,
        setPosts,
        setPostCount,
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

        // Estados do período de comparação
        comparePosts,
        setComparePosts,
        setComparePostCount,
        setCompareTotalLikes,
        setCompareTotalReplies,
        setCompareTotalReposts,
        setCompareTotalQuotes,
        setComparePercentageLikes,
        setComparePercentageReplies,
        setComparePercentageReposts,
        setComparePercentageQuotes,
        setCompareAverageLikes,
        setCompareAverageReplies,
        setCompareAverageReposts,
        setCompareAverageQuotes,

        setTotalLikesDiff,

        setPercentageLikesDiff,
        setPercentageQuotesDiff,
        setPercentageRepostsDiff,
        setPercentageRepliesDiff
    } = useInteractionContext();

    // Função para formatar datas
    const formatDate = (date) => date ? new Date(date).toISOString().split('T')[0] : null;

    // Carregar posts do período principal
    useEffect(() => {
        if (value.startDate && value.endDate) {
            const formattedStartDate = formatDate(value.startDate);
            const formattedEndDate = formatDate(value.endDate);

            console.log('Fetching posts for period:', formattedStartDate, formattedEndDate);
            fetchPostsByPeriod(
                userData,
                formattedStartDate,
                formattedEndDate,
                setPosts,
                setPostCount,
                () => { } // Placeholder para setDate, se necessário
            );
        }
    }, [value.startDate, value.endDate, userData]);

    // Carregar posts do período de comparação
    useEffect(() => {
        if (compareValue.startDate && compareValue.endDate) {
            const formattedCompareStartDate = formatDate(compareValue.startDate);
            const formattedCompareEndDate = formatDate(compareValue.endDate);

            console.log('Fetching posts for comparison period:', formattedCompareStartDate, formattedCompareEndDate);
            fetchPostsByComparePeriod(
                userData,
                formattedCompareStartDate,
                formattedCompareEndDate,
                setComparePosts,
                setComparePostCount,
                () => { } // Placeholder
            );
        }
    }, [compareValue.startDate, compareValue.endDate, userData]);

    // Métricas do período principal
    useEffect(() => {
        if (posts && posts.length > 0) {
            console.log('Calculating metrics for posts:', posts);
            const metrics = calculateMetrics(posts);

            setTotalLikes(metrics.totalLikes);
            setTotalReplies(metrics.totalReplies);
            setTotalReposts(metrics.totalReposts);
            setTotalQuotes(metrics.totalQuotes);

            setAverageLikes(metrics.averageLikes);
            setAverageReplies(metrics.averageReplies);
            setAverageReposts(metrics.averageReposts);
            setAverageQuotes(metrics.averageQuotes);

            setPercentageLikes(metrics.percentageLikes);
            setPercentageReplies(metrics.percentageReplies);
            setPercentageReposts(metrics.percentageReposts);
            setPercentageQuotes(metrics.percentageQuotes);
        }
    }, [posts]);

    // Métricas do período comparativo
    useEffect(() => {
        if (comparePosts && comparePosts.length > 0) {
            console.log('Calculating metrics for comparison posts:', comparePosts);
            const compareMetrics = calculateMetrics(comparePosts);

            setCompareTotalLikes(compareMetrics.totalLikes);
            setCompareTotalReplies(compareMetrics.totalReplies);
            setCompareTotalReposts(compareMetrics.totalReposts);
            setCompareTotalQuotes(compareMetrics.totalQuotes);

            setCompareAverageLikes(compareMetrics.averageLikes);
            setCompareAverageReplies(compareMetrics.averageReplies);
            setCompareAverageReposts(compareMetrics.averageReposts);
            setCompareAverageQuotes(compareMetrics.averageQuotes);

            setComparePercentageLikes(compareMetrics.percentageLikes);
            setComparePercentageReplies(compareMetrics.percentageReplies);
            setComparePercentageReposts(compareMetrics.percentageReposts);
            setComparePercentageQuotes(compareMetrics.percentageQuotes);
        }
    }, [comparePosts]);

    // // Calcular a diferença de likes entre os períodos
    // useEffect(() => {
    //     // Verifica se os dados do período principal e do período de comparação estão disponíveis
    //     const totalLikes = posts.length > 0 ? calculateMetrics(posts).totalLikes : null;
    //     const compareTotalLikes = comparePosts.length > 0 ? calculateMetrics(comparePosts).totalLikes : null;

    //     // Atualiza o estado somente se ambos os valores forem válidos
    //     if (totalLikes !== null && compareTotalLikes !== null) {
    //         const totalLikesDiff = totalLikes - compareTotalLikes;
    //         setTotalLikesDiff(totalLikesDiff);
    //         console.log('Total Likes Difference:', totalLikesDiff);
    //     }
    // }, [posts, comparePosts, setTotalLikesDiff]);

    useEffect(() => {
        // Verifica se os dados do período principal e do período de comparação estão disponíveis
        const currentMetrics = posts.length > 0 ? calculateMetrics(posts) : null;
        const compareMetrics = comparePosts.length > 0 ? calculateMetrics(comparePosts) : null;

        // Atualiza o estado somente se ambos os valores forem válidos
        if (currentMetrics && compareMetrics) {
            const differences = calculateDifference(currentMetrics, compareMetrics);

            // Atualiza os estados correspondentes
            setTotalLikesDiff(differences.totalLikesDiff);
            // setTotalRepliesDiff(differences.totalRepliesDiff);
            // setTotalRepostsDiff(differences.totalRepostsDiff);
            // setTotalQuotesDiff(differences.totalQuotesDiff);
            setPercentageLikesDiff(differences.percentageLikesDiff);
            setPercentageRepliesDiff(differences.percentageRepliesDiff);
            setPercentageRepostsDiff(differences.percentageRepostsDiff);
            setPercentageQuotesDiff(differences.percentageQuotesDiff);

            console.log('Differences:', differences);
        }
    }, [posts, comparePosts]);

    return (
        <StyledDiv>
            <div className="container">
                <StyledTex002>Selecione o periodo</StyledTex002>
                <Datepicker
                    showShortcuts={true}
                    showFooter={true}
                    value={value}
                    onChange={newValue => {
                        console.log('Datepicker value changed:', newValue);
                        setValue(newValue);
                    }}
                />

            </div>

            {value.startDate && value.endDate && ( // Renderiza o segundo Datepicker apenas se ambos os valores estiverem preenchidos
                <>
                    <div className="container">
                        <StyledTex002>Compare com</StyledTex002>
                        <Datepicker
                            showShortcuts={true}
                            showFooter={true}
                            value={compareValue}
                            onChange={newCompareValue => {
                                console.log('Comparison Datepicker value changed:', newCompareValue);
                                setCompareValue(newCompareValue);
                            }}
                        />
                    </div>
                </>
            )}
        </StyledDiv>
    );
};

export default MyDatePicker;