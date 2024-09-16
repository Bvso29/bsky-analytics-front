import React from 'react';
import { StyledCen002 } from "@/app/variaveis";
import { StyledInteractions } from "./style";
import { InteractionsCard } from "./InteractionsItem";
import AnimatedNumber from "@/components/fragments/AnimatedNumber";
import { useInteractionContext } from '../../../../providers/useInteractionContext'; // Importar o hook do contexto

export function Interactions() {
    const { totalLikes, totalReplies, totalReposts, totalQuotes } = useInteractionContext(); // Usar o contexto para obter os dados

    // Função para formatar números com separadores de milhares
    const formatNumber = (number) => {
        return number.toLocaleString('pt-BR');
    };

    return (
        <StyledInteractions>
            <StyledCen002 className="cen_002">
                <div className="container">
                    <InteractionsCard
                        className={"likes Ite_Pad"}
                        description={"News Like"}
                        number={<AnimatedNumber number={totalLikes} formatNumber={formatNumber} />}
                        spanValue={formatNumber(totalLikes)}
                        spanstyle={"styleDown"}
                    />
                    <InteractionsCard
                        className={"subscribe Ite_Pad"}
                        description={"News subscribe"}
                        number={<AnimatedNumber number={totalReposts} formatNumber={formatNumber} />}
                        spanValue={formatNumber(totalReposts)}
                        spanstyle={"styleUp"}
                    />
                    <InteractionsCard
                        className={"replyce Ite_Pad"}
                        description={"News replyce"}
                        number={<AnimatedNumber number={totalReplies} formatNumber={formatNumber} />}
                        spanValue={formatNumber(totalReplies)}
                        spanstyle={"styleUp"}
                    />
                    <InteractionsCard
                        className={"quotes Ite_Pad"}
                        description={"News quotes"}
                        number={<AnimatedNumber number={totalQuotes} formatNumber={formatNumber} />}
                        spanValue={formatNumber(totalQuotes)}
                        spanstyle={"styleUp"}
                    />
                </div>
            </StyledCen002>
        </StyledInteractions>
    );
}