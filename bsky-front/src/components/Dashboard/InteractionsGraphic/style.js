import styled from "styled-components"

export const StyledInteractionsGraphic = styled.section`
    width: 100%;
    /* Centralizador */
    .cen_002 {
        width: calc(100% - 2rem);
        margin: 0;
        padding: 2.5rem 0rem 0.5rem 0;
        max-width: none;
        background-color: var(--Bkg002);
        border-radius: 1rem;
    }
    .Ite_Pad {
        width: calc(100% - 40px);
        margin: 0 auto;
        align-items: start;
    }

    /* Phone */
    @media (max-width: 767.98px) {
        .cen_002 {
            width: 100%;
        }
    }
`
