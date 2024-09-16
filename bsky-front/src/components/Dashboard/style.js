import styled from "styled-components"

export const StyledContainer = styled.section`
    margin-top: 1rem;
    .Filtro {
        width: 100%;
        display: flex;
        background-color: var(--Bkg002);
        border-radius: 1rem;
        padding: 1rem 0;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

        .Periodo {
            width: 100%;
            justify-content: center;
            align-items: center;
            display: flex;
            flex-direction: column;
            border-right: 2px solid var(--Cor005);
            .Filtros {
                width: 100%;
                display: flex;
                justify-content: center;
            }
        }
        .Dia {
            width: 100%;
            justify-content: center;
            align-items: center;
            display: flex;
            flex-direction: column;
            .Filtros {
                width: 100%;
                display: flex;
                justify-content: center;
            }
        }
    }

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
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    .Con_Con {
        width: 100%;
        flex-grow: 1; /* Permite que o elemento ocupe o restante do espaço */
        margin-left: 32rem; /* Espaço para compensar a largura do .Con_Men e o gap */

        .Con_Con_Gra {
            display: flex;
            margin: 0 auto;
            gap: 2rem;
            /* align-items: center; */
        }
    }

    .Qtd_Tot {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--Bkg002);
        border-radius: 1rem;
        padding: 1rem;
        width: calc(100% - 40px);
        margin: 2rem auto auto auto;
        box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 1px;
    }
    .Inf_Uti {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        background-color: var(--Bkg002);
        border-radius: 1rem;
        padding: 1rem;
        width: calc(100% - 40px);
        margin: 2rem auto auto auto;
        box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 1px;
    }

    /* Desktop */
    @media (max-width: 1199.98px) {
        .Con_Con {
            margin-left: 22rem; /* Espaço para compensar a largura do .Con_Men e o gap */
        }
        .Con_Men {
            max-width: 22rem;
        }
        .Inf_Uti {
            grid-template-columns: repeat(23 1fr);
        }

        .Filtro{
            flex-direction: column;
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

        .Inf_Uti {
            grid-template-columns: repeat(2, 1fr);
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
