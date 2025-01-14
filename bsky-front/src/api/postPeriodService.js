// Funcionando
// // src/api/postPeriodService.js
// import { api } from '../../services/api.js'; // Importa a instância api de services.js

// // Função para buscar posts por período
// export const fetchPostsByPeriod = async (userData, startDate, endDate, setPosts, setPostCount, setDate) => {
//     if (userData && startDate && endDate) {
//         try {
//             console.log('Fetching posts for period:', startDate, endDate);
//             const response = await api.get(`feedbyperiod?did=${userData.did}&startDate=${startDate}&endDate=${endDate}`, {
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'x-api-key': process.env.NEXT_PUBLIC_API_KEY
//                 }
//             });

//             console.log('API response:', response.data);

//             if (response.data && response.data.mainPeriod) {
//                 console.log('Response data:', response.data.mainPeriod);
//                 const validPosts = response.data.mainPeriod.map(post => ({
//                     likeCount: post.likeCount || 0,
//                     replyCount: post.replyCount || 0,
//                     repostCount: post.repostCount || 0,
//                     quoteCount: post.quoteCount || 0
//                 }));

//                 console.log('Valid posts:', validPosts);
//                 setPosts(validPosts);
//                 setPostCount(validPosts.length); // Atualizar o número de posts

//                 // Redefinir o valor do input de data específica
//                 setDate('');
//             } else {
//                 console.error('No mainPeriod in response data');
//             }
//         } catch (error) {
//             console.error('Erro ao buscar posts por período:', error);
//         }
//     } else {
//         console.error('Start date and end date must be provided');
//     }
// };


// src/api/postPeriodService.js
import { api } from "../../services/api.js"; // Importa a instância api de services.js

// Função para buscar posts por período
export const fetchPostsByPeriod = async (
    userData,
    startDate,
    endDate,
    setPosts,
    setPostCount,
    setDate
) => {
    if (userData && startDate && endDate) {
        try {
            console.log("Fetching posts for period:", startDate, endDate);
            const response = await api.get(
                `feedbyperiod?did=${userData.did}&startDate=${startDate}&endDate=${endDate}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
                    },
                }
            );

            console.log("API response:", response.data);

            if (response.data && response.data.mainPeriod) {
                console.log("Response data:", response.data.mainPeriod);

                const validPosts = response.data.mainPeriod.map((post) => ({
                    likeCount: post.likeCount || 0,
                    replyCount: post.replyCount || 0,
                    repostCount: post.repostCount || 0,
                    quoteCount: post.quoteCount || 0,
                }));

                console.log("Valid posts:", validPosts);
                setPosts(validPosts);
                setPostCount(validPosts.length); // Atualizar o número de posts

                // Redefinir o valor do input de data específica
                setDate("");
            } else {
                console.error("No mainPeriod in response data");
            }
        } catch (error) {
            console.error("Erro ao buscar posts por período:", error);
        }
    } else {
        console.error("Start date and end date must be provided");
    }
};

// Função para buscar posts por período de comparação
// export const fetchPostsByComparePeriod = async (
//     userData,
//     compareStart,
//     compareEnd,
//     setComparePosts,
//     setComparePostCount,
//     setDate
// ) => {
//     if (userData && compareStart && compareEnd) {
//         try {
//             console.log(
//                 "Fetching posts for comparison period:",
//                 compareStart,
//                 compareEnd
//             );
//             const response = await api.get(
//                 `feedbyperiod?did=${userData.did}&startDate=${compareStart}&endDate=${compareEnd}`,
//                 {
//                     headers: {
//                         "Content-Type": "application/json",
//                         "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
//                     },
//                 }
//             );

//             console.log("API response:", response.data);

//             if (response.data && response.data.comparePeriod) {
//                 console.log("Response data:", response.data.comparePeriod);
//                 const validPosts = response.data.comparePeriod.map((post) => ({
//                     likeCount: post.likeCount || 0,
//                     replyCount: post.replyCount || 0,
//                     repostCount: post.repostCount || 0,
//                     quoteCount: post.quoteCount || 0,
//                 }));

//                 console.log("Valid posts:", validPosts);
//                 setComparePosts(validPosts);
//                 setComparePostCount(validPosts.length); // Atualizar o número de posts

//                 // Redefinir o valor do input de data específica
//                 setDate("");
//             } else {
//                 console.error("No comparePeriod in response data");
//             }
//         } catch (error) {
//             console.error(
//                 "Erro ao buscar posts por período de comparação:",
//                 error
//             );
//         }
//     } else {
//         console.error("Comparison start date and end date must be provided");
//     }
// };

// Função para buscar posts por período de comparação
// Função para buscar posts por período de comparação
export const fetchPostsByComparePeriod = async (
    userData,
    compareStart,
    compareEnd,
    setComparePosts,
    setComparePostCount,
    setDate
) => {
    if (userData && compareStart && compareEnd) {
        try {
            console.log("Fetching posts for comparison period:", compareStart, compareEnd);

            const response = await api.get(
                `feedbyperiod?did=${userData.did}&startDate=${compareStart}&endDate=${compareEnd}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
                    },
                }
            );

            console.log("API response:", response.data);

            if (response.data && response.data.mainPeriod) {
                console.log("Comparison period data:", response.data.mainPeriod);

                const validComparePosts = response.data.mainPeriod.map((post) => ({
                    likeCount: post.likeCount || 0,
                    replyCount: post.replyCount || 0,
                    repostCount: post.repostCount || 0,
                    quoteCount: post.quoteCount || 0,

                }));

                console.log("Valid comparison posts:", validComparePosts);

                setComparePosts(validComparePosts);
                setComparePostCount(validComparePosts.length); // Atualizar o número de posts de comparação
                setDate(""); // Resetar o campo de data, se necessário
            } else {
                console.error("No mainPeriod in response data. Full response:", response.data);
            }
        } catch (error) {
            console.error("Erro ao buscar posts por período de comparação:", error);
        }
    } else {
        console.error("Comparison start date and end date must be provided");
    }
};



