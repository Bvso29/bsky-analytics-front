import { StyledAss001, StyledTit002 } from "@/app/variaveis";
import { StyledSpan } from "./style";
import { StyledItem } from "./style";
import { WiDirectionUpRight } from "react-icons/wi";
import { WiDirectionDownRight } from "react-icons/wi";




export function InteractionsCard({ className, description, number, spanStyle, spanValue, days }) {
    return (
        <StyledItem className={className}>
            <StyledAss001>{description}</StyledAss001>
            <StyledTit002>{number}</StyledTit002>
            {/* Logica para estilizar de acordo com o crescimento do valor ou decaimento- através de Props */}
            <div className="con_spa_day">
                <StyledSpan spanStyle={spanStyle}>
                    {spanStyle === "styleUp" ? (
                        <div>
                            <WiDirectionUpRight />
                            {spanValue}
                        </div>
                    ) : spanStyle === "styleDown" ? (
                        <div>
                            <WiDirectionDownRight />
                            {spanValue}
                        </div>
                    ) : (
                        spanValue

                    )}
                </StyledSpan>
                <p>
                    {days}
                </p>

            </div>
        </StyledItem>
    );
}