//Funcioanndo
// import React from 'react';
// import { StyledCen002 } from "../../../style/variaveis.js";
// import { StyledInteractions } from "./style";
// import { InteractionsCard } from "./InteractionsItem";
// import AnimatedNumber from "@/components/fragments/AnimatedNumber";
// import { useInteractionContext } from '../../../providers/useInteractionContext.jsx'; // Importar o hook do contexto

// export function Interactions() {
//     const { totalLikes, totalReplies, totalReposts, totalQuotes } = useInteractionContext(); // Usar o contexto para obter os dados


//     // Função para formatar números com separadores de milhares
//     const formatNumber = (number) => {
//         return number.toLocaleString('pt-BR');
//     };

//     return (
//         <StyledInteractions>
//             <StyledCen002 className="cen_002">
//                 <div className="container">
//                     <InteractionsCard
//                         className={"likes Ite_Pad"}
//                         description={"Like"}
//                         number={<AnimatedNumber number={totalLikes} formatNumber={formatNumber} />}
//                         spanValue={formatNumber(totalLikes)}
//                         spanstyle={"styleDown"}
//                     />
//                     <InteractionsCard
//                         className={"subscribe Ite_Pad"}
//                         description={"reposts"}
//                         number={<AnimatedNumber number={totalReposts} formatNumber={formatNumber} />}
//                         spanValue={formatNumber(totalReposts)}
//                         spanstyle={"styleUp"}
//                     />
//                     <InteractionsCard
//                         className={"replyce Ite_Pad"}
//                         description={"Replyce"}
//                         number={<AnimatedNumber number={totalReplies} formatNumber={formatNumber} />}
//                         spanValue={formatNumber(totalReplies)}
//                         spanstyle={"styleUp"}
//                     />
//                     <InteractionsCard
//                         className={"quotes Ite_Pad"}
//                         description={"Quotes"}
//                         number={<AnimatedNumber number={totalQuotes} formatNumber={formatNumber} />}
//                         spanValue={formatNumber(totalQuotes)}
//                         spanstyle={"styleUp"}
//                     />
//                 </div>
//             </StyledCen002>
//         </StyledInteractions>
//     );
// }


import React from 'react';
import { StyledCen002 } from "../../../style/variaveis.js";
import { ConditionalSection, StyledInteractions } from "./style";
import { InteractionsCard } from "./InteractionsItem";
import AnimatedNumber from "@/components/fragments/AnimatedNumber";
import { useInteractionContext } from '../../../providers/useInteractionContext.jsx'; // Importar o hook do contexto

export function Interactions() {
    const {
        totalLikes, totalReplies, totalReposts, totalQuotes, // Dados do período principal
        compareTotalLikes, compareTotalReplies, compareTotalReposts, compareTotalQuotes, // Dados do período de comparação
        totalLikesDiff,
        // Comparação porcentagem
        percentageLikesDiff, percentageRepliesDiff, percentageRepostsDiff, percentageQuotesDiff
    } = useInteractionContext(); // Usar o contexto para obter os dados

    // Função para formatar números com separadores de milhares
    const formatNumber = (number) => {
        return number ? number.toLocaleString('pt-BR') : "0";
    };


    return (
        <StyledInteractions>
            <StyledCen002 className="cen_002">
                <div className="container">
                    {/* Exibição dos dados do período principal */}
                    <InteractionsCard
                        className={"likes Ite_Pad"}
                        description={"Like"}
                        number={<AnimatedNumber number={totalLikes} formatNumber={formatNumber} />}
                        spanValue={formatNumber(percentageLikesDiff)}
                        spanstyle={"styleDown"}
                    />
                    <InteractionsCard
                        className={"subscribe Ite_Pad"}
                        description={"Reposts"}
                        number={<AnimatedNumber number={totalReposts} formatNumber={formatNumber} />}
                        spanValue={formatNumber(percentageRepostsDiff)}
                        spanstyle={"styleUp"}
                    />
                    <InteractionsCard
                        className={"replyce Ite_Pad"}
                        description={"Replies"}
                        number={<AnimatedNumber number={totalReplies} formatNumber={formatNumber} />}
                        spanValue={formatNumber(percentageRepliesDiff)}
                        spanstyle={"styleUp"}
                    />
                    <InteractionsCard
                        className={"quotes Ite_Pad"}
                        description={"Quotes"}
                        number={<AnimatedNumber number={totalQuotes} formatNumber={formatNumber} />}
                        spanValue={formatNumber(percentageQuotesDiff)}
                        spanstyle={"styleUp"}
                    />
                </div>

                {/* Comparação */}
                <ConditionalSection isVisible={compareTotalLikes > 0}>
                    <div className="container">
                        {/* <InteractionsCard
                            className={"likes Ite_Pad"}
                            description={"Likes (Diferença)"}
                            number={<AnimatedNumber number={totalLikesDiff} formatNumber={formatNumber} />}
                        /> */}

                        <InteractionsCard
                            className={"likes Ite_Pad"}
                            description={"Likes (Comparativo)"}
                            number={<AnimatedNumber number={compareTotalLikes} formatNumber={formatNumber} />}

                        />
                        <InteractionsCard
                            className={"subscribe Ite_Pad"}
                            description={"Reposts (Comparativo)"}
                            number={<AnimatedNumber number={compareTotalReposts} formatNumber={formatNumber} />}

                        />
                        <InteractionsCard
                            className={"replyce Ite_Pad"}
                            description={"Replies (Comparativo)"}
                            number={<AnimatedNumber number={compareTotalReplies} formatNumber={formatNumber} />}

                        />
                        <InteractionsCard
                            className={"quotes Ite_Pad"}
                            description={"Quotes (Comparativo)"}
                            number={<AnimatedNumber number={compareTotalQuotes} formatNumber={formatNumber} />}

                        />
                    </div>
                </ConditionalSection>
            </StyledCen002>
        </StyledInteractions>
    );
}

