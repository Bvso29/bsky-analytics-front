import styled from "styled-components"

export const StyledInteractions = styled.div`
    margin: 2rem 0;

    /* Centralizador */
    .cen_002 {
        background-color: var(--Bkg002);
        padding: 2rem;
        border-radius: 1rem;
    }

    .container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        place-items: center;

        /* Classes dos Itens Padrões */
        .Ite_Pad {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            justify-content: center;
            align-items: center;
            border-left: 0.2rem solid var(--Cor003); //Borda
            &:nth-child(1) {
                border-left: none;
            }
        }
    }

    /* Phone */
    @media (max-width: 767.98px) {
        .container {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
            .Ite_Pad {
                &:nth-child(3) {
                    border-left: none;
                }
            }
        }
    }
`
