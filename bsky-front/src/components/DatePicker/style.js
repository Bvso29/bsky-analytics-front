import styled from "styled-components"

export const StyledDiv = styled.div`
    /* max-width: 30rem;*/
    margin: 0 auto;
    display: flex;
    gap: 2rem;
    input {
        font-size: 100%;
    }
    .lg\:h-10 {
        font-size: 1.3rem;
        height: 4rem;
    }
    .duration-300 {
        font-size: 1.3rem;
        line-height: 20px;
    }
    /* Tituloa cima do input, junto com o Input */
    .container {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        p{
            font-weight: 500;
        }}
    @media (max-width:550px){
flex-direction: column;
    }

`
