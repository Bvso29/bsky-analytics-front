import styled from "styled-components"

export const StyledContainer = styled.section`
    display: flex;
    gap: 2rem;
    position: relative;
    .Con_Men {
        width: 100%;
        height: 100vh;
        max-width: 30rem;
        position: fixed; /* Alterado de sticky para fixed */
        background-color: var(--Bkg002);
        top: 0;
        overflow-y: auto;
    }
    .Con_Con {
        width: 100%;
        flex-grow: 1; /* Permite que o elemento ocupe o restante do espaço */
        margin-left: 32rem; /* Espaço para compensar a largura do .Con_Men e o gap */

        .Con_Con_Gra {
            display: flex;
            max-width: 1200px;
            margin: 0 auto;
            /* align-items: center; */
        }
    }

    /* Desktop */
    @media (max-width: 1199.98px) {
        .Con_Con {
            margin-left: 22rem; /* Espaço para compensar a largura do .Con_Men e o gap */

        }
        .Con_Men{
            max-width: 22rem;
        }
    }

    /* Tablet */
    @media (max-width: 991.98px) {
        flex-direction: column;
        /* padding: 1rem 2rem; */
        align-items: center;
        .Con_Men {
            height: fit-content;
            margin: 0 auto;
            max-width: none;
            width: calc(100% - 40px);
            z-index: 999;
            border-radius: 0 0 1rem 1rem;
        }

        .Con_Con {
            margin-left: 0;
            margin-top: 10rem;
        }
    }

    /* Phone */
    @media (max-width: 767.98px) {
        .Con_Con_Gra {
            flex-direction: column;
            gap: 2rem;
        }
    }
`
