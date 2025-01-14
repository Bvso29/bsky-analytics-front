// // src/api/postDataService.js
// import { api } from '../../services/api.js'; // Importa a instância api de services.js

// // Api que Alimenta o InteractionContext Por Data Específica
// export const fetchPostsByDate = async (userData, specificDate, setPosts, setPostCount, setDate) => {
//     if (userData && specificDate) {
//         try {
//             console.log('Fetching posts for date:', specificDate);
//             const response = await api.get(`feedbydate?did=${userData.did}&date=${specificDate}`, {
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'x-api-key': process.env.NEXT_PUBLIC_API_KEY
//                 }
//             });

//             console.log('API response:', response.data);

//             if (response.data && response.data.postsInfo) {
//                 console.log('Response data:', response.data.postsInfo);
//                 const validPosts = response.data.postsInfo.map(post => ({
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
//                 console.error('No postsInfo in response data');
//             }
//         } catch (error) {
//             console.error('Erro ao buscar posts por data específica:', error);
//         }
//     } else {
//         console.error('Specific date must be provided');
//     }
// };