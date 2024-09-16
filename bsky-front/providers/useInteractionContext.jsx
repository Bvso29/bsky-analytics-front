import React, { createContext, useContext, useState } from 'react';

const InteractionContext = createContext();

export const useInteractionContext = () => useContext(InteractionContext);

export const InteractionProvider = ({ children }) => {
    const [limit, setLimit] = useState(10);
    const [totalLikes, setTotalLikes] = useState(0);
    const [totalReplies, setTotalReplies] = useState(0);
    const [totalReposts, setTotalReposts] = useState(0);
    const [totalQuotes, setTotalQuotes] = useState(0);
    const [percentageLikes, setPercentageLikes] = useState(0);
    const [percentageReplies, setPercentageReplies] = useState(0);
    const [percentageReposts, setPercentageReposts] = useState(0);
    const [percentageQuotes, setPercentageQuotes] = useState(0);
    const [averageLikes, setAverageLikes] = useState(0);
    const [averageReplies, setAverageReplies] = useState(0);
    const [averageReposts, setAverageReposts] = useState(0);
    const [averageQuotes, setAverageQuotes] = useState(0);

    return (
        <InteractionContext.Provider value={{
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
            averageQuotes, setAverageQuotes
        }}>
            {children}
        </InteractionContext.Provider>
    );
};