import { StyledCen002 } from "@/app/variaveis";
import { StyledInteractions } from "./style";
import { InteractionsCard } from "./InteractionsItem";


export function Interactions({totalLikes,totalReplies, totalQuotes, totalReposts}) {
    return (
        <StyledInteractions>
            <StyledCen002 className="cen_002">
                <div className="container">
                    <InteractionsCard className={"likes Ite_Pad"} description={"News Like"} number={totalLikes} spanValue={"100"} spanStyle={"styleDown"} />
                    <InteractionsCard className={"subscribe Ite_Pad"} description={"News subscribe"} number={totalReposts} spanValue={"21.2"} spanStyle={"styleUp"} />
                    <InteractionsCard className={"replyce Ite_Pad"} description={"News replyce"} number={totalReplies} spanValue={"2.32"} spanStyle={"styleUp"} />
                    <InteractionsCard className={"quotes Ite_Pad"} description={"News quotes"} number={totalQuotes} spanValue={"23.12"} spanStyle={"styleUp"} />
                </div>
            </StyledCen002>
        </StyledInteractions>
    )
}