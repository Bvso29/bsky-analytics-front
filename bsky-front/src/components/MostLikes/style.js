import styled from "styled-components"

export const StyledMostLikes = styled.section`
    display: flex;
    .cen_002 {
        margin: 2rem auto;
        border-radius: 1rem;
    }
    ul {
        list-style: none;
        height: 16.5rem;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 1rem;
        @media (max-width: 1190px) {
            /* grid-template-columns: repeat(3, 1fr); */
        }

        li {
            display: flex;
            position: relative;
            width: 100%;
            height: 100%;
            /* padding: 100% 0 0 0; */
            svg {
                bottom: 0;
                left: 0;
                position: absolute;
                right: auto;
                top: 0;
                width: 50%;
            }
            img {
                bottom: 0;
                height: 100%;
                left: auto;
                object-fit: cover;
                position: absolute;
                right: 0;
                top: 0;
                width: 50%;
            }
        }
    }
    /* Desktop */
    @media (max-width: 1199.98px) {
        ul {
            grid-template-columns: repeat(3, 1fr);
            height: 35rem;
        }
    }

    /* Phone */
    @media (max-width: 767.98px) {
        ul {
            grid-template-columns: repeat(2, 1fr);
            height: 50rem;
            gap: 2rem 1rem;
        }
    }

    @media (max-width: 589.98px) {
        ul {
            grid-template-columns: repeat(1, 1fr);
        }
    }
`
