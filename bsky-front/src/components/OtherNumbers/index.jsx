import { useInteractionContext } from "../../../providers/useInteractionContext";
import { StyledTex002 } from "../../../style/variaveis";
import { calculateTotal, calculateAverage, calculatePercentage, formatNumber } from '../../../utils/utils.js'; // Importando as funções utilitárias


export function OtherNumbers() {
    const { limit, setLimit, setTotalLikes, setTotalReplies, setTotalReposts, setTotalQuotes, setPercentageLikes, setPercentageReplies, setPercentageReposts, setPercentageQuotes, setAverageLikes, setAverageReplies, setAverageReposts, setAverageQuotes, percentageLikes, percentageReplies, percentageReposts, percentageQuotes, averageLikes, averageReplies, averageReposts, averageQuotes, totalLikes, totalReplies, totalReposts, totalQuotes } = useInteractionContext();
    return (
        <div className='Inf_Uti'>
            <StyledTex002>Total de Likes: {totalLikes.toLocaleString('pt-BR')}</StyledTex002>
            <StyledTex002>Total de Replies: {totalReplies.toLocaleString('pt-BR')}</StyledTex002>
            <StyledTex002>Total de Reposts: {totalReposts.toLocaleString('pt-BR')}</StyledTex002>
            <StyledTex002>Total de Quotes: {totalQuotes.toLocaleString('pt-BR')}</StyledTex002>
            <StyledTex002>Média de Likes por Post: {formatNumber(averageLikes)}</StyledTex002>
            <StyledTex002>Média de Replies por Post: {formatNumber(averageReplies)}</StyledTex002>
            <StyledTex002>Média de Reposts por Post: {formatNumber(averageReposts)}</StyledTex002>
            <StyledTex002>Média de Quotes por Post: {formatNumber(averageQuotes)}</StyledTex002>
        </div>
    )
}