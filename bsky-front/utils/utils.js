// Funcionando

// // Definindo a função formatNumber
// export const formatNumber = (number) => {
//     return number.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
// };

// // Outras funções utilitárias
// export const calculateTotal = (posts, property) => {
//     return posts.reduce((total, post) => total + (post[property] || 0), 0);
// };

// export const calculateAverage = (posts, property) => {
//     return posts.length ? calculateTotal(posts, property) / posts.length : 0;
// };

// export const calculatePercentage = (part, total) => {
//     return total ? (part / total) * 100 : 0;
// };

// export const calculateMetrics = (posts) => {
//     const totalLikes = calculateTotal(posts, 'likeCount');
//     const totalReplies = calculateTotal(posts, 'replyCount');
//     const totalReposts = calculateTotal(posts, 'repostCount');
//     const totalQuotes = calculateTotal(posts, 'quoteCount');

//     const totalInteractions = totalLikes + totalReplies + totalReposts + totalQuotes;

//     const averageLikes = calculateAverage(posts, 'likeCount');
//     const averageReplies = calculateAverage(posts, 'replyCount');
//     const averageReposts = calculateAverage(posts, 'repostCount');
//     const averageQuotes = calculateAverage(posts, 'quoteCount');

//     const percentageLikes = calculatePercentage(totalLikes, totalInteractions);
//     const percentageReplies = calculatePercentage(totalReplies, totalInteractions);
//     const percentageReposts = calculatePercentage(totalReposts, totalInteractions);
//     const percentageQuotes = calculatePercentage(totalQuotes, totalInteractions);

//     return {
//         totalLikes,
//         totalReplies,
//         totalReposts,
//         totalQuotes,
//         averageLikes,
//         averageReplies,
//         averageReposts,
//         averageQuotes,
//         percentageLikes,
//         percentageReplies,
//         percentageReposts,
//         percentageQuotes
//     };
// };

// Definindo a função formatNumber
export const formatNumber = (number) => {
    return number.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })
}

// Outras funções utilitárias
export const calculateTotal = (posts, property) => {
    return posts.reduce((total, post) => total + (post[property] || 0), 0)
}

export const calculateAverage = (posts, property) => {
    return posts.length ? calculateTotal(posts, property) / posts.length : 0
}

export const calculatePercentage = (part, total) => {
    return total ? (part / total) * 100 : 0
}

// Calculo de diferença dos periodos
export const calculateDifference = (currentMetrics, compareMetrics) => {
    return {
        totalLikesDiff: currentMetrics.totalLikes - compareMetrics.totalLikes,
        totalRepliesDiff:
            currentMetrics.totalReplies - compareMetrics.totalReplies,
        totalRepostsDiff:
            currentMetrics.totalReposts - compareMetrics.totalReposts,
        totalQuotesDiff:
            currentMetrics.totalQuotes - compareMetrics.totalQuotes,

        averageLikesDiff:
            currentMetrics.averageLikes - compareMetrics.averageLikes,
        averageRepliesDiff:
            currentMetrics.averageReplies - compareMetrics.averageReplies,
        averageRepostsDiff:
            currentMetrics.averageReposts - compareMetrics.averageReposts,
        averageQuotesDiff:
            currentMetrics.averageQuotes - compareMetrics.averageQuotes,

        // Percentual de diferença: (valor atual - valor comparativo)  * 100 / valor comparativo
        // Likes
        percentageLikesDiff:
            ((currentMetrics.totalLikes - compareMetrics.totalLikes) /
                Math.abs(compareMetrics.totalLikes)) *
            100,
        // Replies
        percentageRepliesDiff:
            ((currentMetrics.totalReplies - compareMetrics.totalReplies) /
                Math.abs(compareMetrics.totalReplies)) *
            100,

        // Reposts
        percentageRepostsDiff:
            ((currentMetrics.totalReposts - compareMetrics.totalReposts) /
                Math.abs(compareMetrics.totalReposts)) *
            100,

        // Quotes
        percentageQuotesDiff:
            ((currentMetrics.totalQuotes - compareMetrics.totalQuotes) /
                Math.abs(compareMetrics.totalQuotes)) *
            100,
    }
}

export const calculateMetrics = (posts) => {
    const totalLikes = calculateTotal(posts, "likeCount")
    const totalReplies = calculateTotal(posts, "replyCount")
    const totalReposts = calculateTotal(posts, "repostCount")
    const totalQuotes = calculateTotal(posts, "quoteCount")

    const totalInteractions =
        totalLikes + totalReplies + totalReposts + totalQuotes

    const averageLikes = calculateAverage(posts, "likeCount")
    const averageReplies = calculateAverage(posts, "replyCount")
    const averageReposts = calculateAverage(posts, "repostCount")
    const averageQuotes = calculateAverage(posts, "quoteCount")

    const percentageLikes = calculatePercentage(totalLikes, totalInteractions)
    const percentageReplies = calculatePercentage(
        totalReplies,
        totalInteractions
    )
    const percentageReposts = calculatePercentage(
        totalReposts,
        totalInteractions
    )
    const percentageQuotes = calculatePercentage(totalQuotes, totalInteractions)

    return {
        totalLikes,
        totalReplies,
        totalReposts,
        totalQuotes,
        averageLikes,
        averageReplies,
        averageReposts,
        averageQuotes,
        percentageLikes,
        percentageReplies,
        percentageReposts,
        percentageQuotes,
    }
}

export const calculateGrowthPercentage = (current, previous) => {
    return previous !== 0 ? ((current - previous) / previous) * 100 : 0
}

export const calculateGrowthMetrics = (currentMetrics, compareMetrics) => {
    return {
        likesGrowth: calculateGrowthPercentage(
            currentMetrics.totalLikes,
            compareMetrics.totalLikes
        ),
        repliesGrowth: calculateGrowthPercentage(
            currentMetrics.totalReplies,
            compareMetrics.totalReplies
        ),
        repostsGrowth: calculateGrowthPercentage(
            currentMetrics.totalReposts,
            compareMetrics.totalReposts
        ),
        quotesGrowth: calculateGrowthPercentage(
            currentMetrics.totalQuotes,
            compareMetrics.totalQuotes
        ),
    }
}

export const compareMetrics = (currentPosts, comparePosts) => {
    const currentMetrics = calculateMetrics(currentPosts)
    const compareMetrics = calculateMetrics(comparePosts)

    const differences = calculateDifference(currentMetrics, compareMetrics)
    const growth = calculateGrowthMetrics(currentMetrics, compareMetrics)

    return {
        differences,
        growth,
    }
}
