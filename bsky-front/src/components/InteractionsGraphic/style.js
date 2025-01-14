import styled from "styled-components"

export const StyledInteractionsGraphic = styled.section`
    width: calc(100% / 2);

    /* Centralizador */
    .cen_002 {
        margin: 0;
        padding: 2.5rem 0rem 0.5rem 0;
        max-width: none;
        background-color: var(--Bkg002);
        border-radius: 1rem;
        box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 1px;
        .con_inf_gra{
            display: flex;
        }
    }
    .Ite_Pad {
        width: fit-content;
        margin: 0 0 0 20px;
    }

    .con_gra_int {
        min-height: 350px;
    }

    /* Phone */
    @media (max-width: 991.98px) {
        width: 100%;
        .cen_002 {
            .container {
                max-width: none;
            }
        }
    }
`
