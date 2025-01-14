import styled from "styled-components"

export const StyledAside = styled.aside`
    padding: 4rem 2rem;
    .Perfil {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 0.5rem;

        .Perfil_Img_Nom {
            display: flex;
            justify-content: space-between;
            align-items: center;
            img {
                border-radius: 50%;
            }
            p {
                margin: 0 0 0 10px;
            }
        }
        button {
            width: 40px;
            font-size: 1.4rem;
            color: white;
            /* background-color: var(--Cor002); */
            border-radius: 0.8rem;
            border: none;
            border: 1px solid var(--Cor002);
        }
    }

    .Menu {
        padding: 3rem 2rem;
        p {
            font-size: clamp(1.4rem, 4vw, 1.8rem);
            line-height: clamp(1.8rem, 4vw, 2.2rem);
            color: #6c6c6c;
            margin: 1rem 0 1.5rem 0;
        }
        ul {
            list-style: none;
            li {
                font-size: clamp(1.4rem, 4vw, 1.8rem);
                line-height: clamp(1.8rem, 4vw, 2.2rem);
                color: white;
                margin: 1rem 0;
            }
        }
    }

    /* Desktop */
    @media (max-width: 1199.98px) {
        padding: 1rem 2rem;
        .Perfil {
            flex-direction: column;
            button {
                width: 100%;
                margin-top: 1rem;
            }
        }

        .Menu {
            padding: 3rem 1rem;
        }
    }

    /* Tablet */
    @media (max-width: 991.98px) {
        flex-direction: column;
        .Perfil {
            flex-direction: row;
            button {
                width: 40px;
            }
        }
        .Menu {
            padding: 0 2rem;
            ul {
                display: flex;
                flex-direction: row;
                justify-content: center;
                a {
                    border-right: 0.2rem solid var(--Cor003);
                    padding:  0 1rem;
                }
                li {
                    &:nth-last-child(1) {
                        a {
                            border-right: none;
                        }
                    }
                }
            }
            p {
                display: none;
            }
        }
    }
`
