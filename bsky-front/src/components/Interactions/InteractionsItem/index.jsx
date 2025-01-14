import { StyledAss001, StyledTit002 } from "../../../../style/variaveis";
import { StyledSpan } from "./style";
import { StyledItem } from "./style";
import { WiDirectionUpRight } from "react-icons/wi";
import { WiDirectionDownRight } from "react-icons/wi";

export function InteractionsCard({ className, description, number, spanstyle, spanValue, days }) {
    // Verifica se o spanValue é válido antes de tentar convertê-lo para um número
    const numericValue = spanValue !== undefined && spanValue !== null
        ? parseFloat(spanValue.toString().replace(',', '.'))
        : 0; // Defina um valor padrão (por exemplo, 0) se spanValue for indefinido ou nulo

    // Verifique se o valor é nulo ou indefinido
    const displayValue = !isNaN(numericValue) ? numericValue : 0; // Se não for NaN, use o valor, senão use 0


    // Log para verificar o valor que está sendo exibido
    console.log('Display Value:', displayValue);

    // Determine o estilo a ser aplicado ao span baseado no valor
    let appliedSpanStyle;
    if (displayValue > 0) {
        appliedSpanStyle = "positive"; // Para valores positivos
    } else if (displayValue < 0) {
        appliedSpanStyle = "negative"; // Para valores negativos
    } else {
        appliedSpanStyle = "zero"; // Para zero
    }

    return (
        <StyledItem className={className}>
            <StyledAss001>{description}</StyledAss001>
            <StyledTit002>{number}</StyledTit002>
            <div className="con_spa_day">
                {/* Exibe o span somente se o valor não for 0 */}
                {numericValue !== 0 && (
                    <StyledSpan spanstyle={appliedSpanStyle}>
                        {appliedSpanStyle === "positive" && <WiDirectionUpRight />}
                        {appliedSpanStyle === "negative" && <WiDirectionDownRight />}
                        {numericValue} {/* Exibe o valor */}
                    </StyledSpan>
                )}
                <span>{days}</span> {/* Alterado de <p> para <span> */}
            </div>
        </StyledItem>
    );
}
