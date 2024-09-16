import { StyledAss001, StyledTit002 } from "@/app/variaveis";
import { StyledSpan } from "./style";
import { StyledItem } from "./style";
import { WiDirectionUpRight } from "react-icons/wi";
import { WiDirectionDownRight } from "react-icons/wi";




export function InteractionsCard({ className, description, number, spanstyle, spanValue, days }) {
    return (
        <StyledItem className={className}>
            <StyledAss001>{description}</StyledAss001>
            <StyledTit002>{number}</StyledTit002>
            {/* Logica para estilizar de acordo com o crescimento do valor ou decaimento- através de Props */}
            <div className="con_spa_day">
                <StyledSpan spanstyle={spanstyle}>
                    {spanstyle === "styleUp" ? (
                        <div>
                            <WiDirectionUpRight />
                            {spanValue}
                        </div>
                    ) : spanstyle === "styleDown" ? (
                        <div>
                            <WiDirectionDownRight />
                            {spanValue}
                        </div>
                    ) : (
                        spanValue

                    )}
                </StyledSpan>
                {/* <p>
                    {days}
                </p> */}
 <span>{days}</span> {/* Alterado de <p> para <span> */}
            </div>
        </StyledItem>
    );
}