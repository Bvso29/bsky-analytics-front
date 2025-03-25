import styled from "styled-components"

export const SelectGroupContainer = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
    margin: 1rem auto;
    width: fit-content;
`

export const SelectContainer = styled.div`
    cursor: pointer;
    position: relative;
    transition: 300ms;
    color: white;
    overflow: hidden;

    select {
        background-color: #0b1739;
        padding: 5px;
        margin-bottom: 3px;
        border-radius: 5px;
        position: relative;
        z-index: 1;
        font-size: 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: fit-content;
    }

    .custom-select {
        appearance: none; /* Remove a seta padrão */
        background: #081028;

        background-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="gray"><path d="M7 10l5 5 5-5H7z"/></svg>'); /* Seta simples */
        background-repeat: no-repeat;
        background-position: right 0.5rem center;
        background-size: 2rem;
        padding-right: 5rem; /* Espaço extra para a seta */
    }
`
