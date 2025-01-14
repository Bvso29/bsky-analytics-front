import styled from "styled-components"

export const StyledInteractions = styled.div`
    margin: 2rem 0;


    .positive {
        color: green; /* Cor para valores positivos */
    }

    .negative {
        color: red; /* Cor para valores negativos */
    }

    .zero {
        color: white; /* Cor para zero */
    }

    /* Centralizador */
    .cen_002 {
        display: flex;
    flex-direction: column;
    gap: 2rem;
    }

    .container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        place-items: center;
        gap: 2rem;

        /* Classes dos Itens Padrões */
        .Ite_Pad {
            width: 100%;
            height: 96px;
            display: flex;
            flex-direction: column;
            gap: 0.2rem;
            justify-content: center;
            align-items: center;

            background-color: var(--Bkg002);
            padding: 1rem 0;
            border-radius: 1rem;
            box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 1px;
        }
    }

    /* Phone */
    @media (max-width: 767.98px) {
        .container {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
            .Ite_Pad {
            }
        }
    }
`
export const ConditionalSection = styled.div`
    display: ${({ isVisible }) => (isVisible ? "block" : "none")};
`
