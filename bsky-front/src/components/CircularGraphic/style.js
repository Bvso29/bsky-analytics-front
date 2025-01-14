import styled from "styled-components"

export const StyleCircle = styled.div`
    width: calc(100% / 2);

    .Cen_002 {
        padding: 2.5rem 0rem 0.5rem 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        background: var(--Bkg002);
        border-radius: 1rem;
        box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 1px;
        justify-content: center;
        align-items: center;
    }

    /* Phone */
    @media (max-width: 991.98px) {
        width: 100%;

        .Cen_002 {
            width: 100%;
            padding: 1rem 0;
        }
    }
`
