import styled, { css } from "styled-components"

export const StyledItem = styled.div`
    h1 {
        color: var(--Cor003);
        font-weight: 500;
    }
    svg {
        width: 3rem;
        height: 3rem;
    }
    .con_spa_day {
        display: flex;
        align-items: center;
        gap: 1rem;
        p {
            font-size: clamp(1rem, 4vw, 1.4rem);
            line-height: clamp(1.4rem, 4vw, 1.8rem);
            color: var(--Cor003);
        }
    }
`

export const StyledSpan = styled.span`
    font-size: clamp(1rem, 4vw, 1.4rem);
    line-height: clamp(1.4rem, 4vw, 1.8rem);

    div {
    }
    display: flex;
    justify-content: center;
    align-items: center;
    &::after {
        content: "%";
        display: block;
    }

    /* If para Adicionar Cor ao Span */
    ${({ spanstyle }) => {
        if (spanstyle === "positive") {
            return css`
                color: green; // Verde para positivo
            `
        } else if (spanstyle === "negative") {
            return css`
                color: red; // Vermelho para negativo
            `
        } else if (spanstyle === "zero") {
            return css`
                color: white; // Branco para zero
            `
        } else {
            return css`
                color: inherit; // Valor padrão
            `
        }
    }}
`
