// src/utils/postUtils.js

import { calculateMetrics } from './utils';

export const updatePostStatistics = (posts, setTotalLikes, setTotalReplies, setTotalReposts, setTotalQuotes, setAverageLikes, setAverageReplies, setAverageReposts, setAverageQuotes, setPercentageLikes, setPercentageReplies, setPercentageReposts, setPercentageQuotes) => {
    if (posts.length > 0) {
        const metrics = calculateMetrics(posts);

        // Atualizar estados globais
        setTotalLikes(metrics.totalLikes);
        setTotalReplies(metrics.totalReplies);
        setTotalReposts(metrics.totalReposts);
        setTotalQuotes(metrics.totalQuotes);

        // Calcula a média de interações por post
        setAverageLikes(metrics.averageLikes);
        setAverageReplies(metrics.averageReplies);
        setAverageReposts(metrics.averageReposts);
        setAverageQuotes(metrics.averageQuotes);

        // Calcular média de interações
        setPercentageLikes(metrics.percentageLikes);
        setPercentageReplies(metrics.percentageReplies);
        setPercentageReposts(metrics.percentageReposts);
        setPercentageQuotes(metrics.percentageQuotes);
    }
};