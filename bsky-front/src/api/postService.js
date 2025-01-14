// src/api/postService.js
import { api } from '../../services/api';

export const fetchPosts = async (userData, limit, setPosts, setPostCount, setTotalLikes, setTotalReplies, setTotalReposts, setTotalQuotes, setPercentageLikes, setPercentageReplies, setPercentageReposts, setPercentageQuotes, setAverageLikes, setAverageReplies, setAverageReposts, setAverageQuotes) => {
    if (userData) {
        try {
            const response = await api.get(`feed?did=${userData.did}&limit=${limit}`, {
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