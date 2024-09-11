import styled from "styled-components"

export const StyleCircle = styled.div`
    width: 100%;
    height: 100%;
    max-width: 330px;
    .Cen_002 {
        background: var(--Bkg002);
        border-radius: 1rem;
        height: 100%;
    }

    /* Phone */
    @media (max-width: 767.98px) {
        .Cen_002 {
            width: 100%;
            padding: 1rem 0;
        }
    }
`
