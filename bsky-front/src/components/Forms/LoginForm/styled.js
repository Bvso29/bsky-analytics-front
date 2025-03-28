import { Link } from "react-router-dom"
import styled from "styled-components"

export const StyledSection = styled.section`
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    flex-direction: column;
    text-align: center;
    background-color: var(--Bkg001);
    width: 100vw;
    height: 100vh;
    color: #f8f9fa;
    h3 {
        color: var(--Cor002);
        margin-top: 3.063rem;
    }
`

export const StyledForm = styled.form`
    display: flex;
    padding: 3rem;
    flex-direction: column;
    margin: 1rem auto;
    background-color: var(--Bkg002);
    border-radius: 1rem;
    width: 30rem;
    height: 24rem;
    .textInputWrapper {
        width: 100%;

    }

    #But_Log {
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        color: var(--Cor000);
        border-radius: 3.25733px;
        flex: none;
        order: 3;
        flex-grow: 0;
    }
`

export const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    text-align: start;
    gap: 1rem;
    padding: 2rem 1rem 1rem 1rem;

    align-items: center;
`
export const StyledInput = styled.input`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0.407rem 1rem;
    gap: 1.12rem;
    background-color: #212529;
    color: #f8f9fa;
    border: 1px solid white;
    border-radius: 0.2rem;
`

export const StyledButton = styled.button`
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 17.9153px;
    gap: 8.14px;
    width: 259.9px;
    height: 38.5px;
    background: var(--Cor002);
    border: 0.9772px solid var(--Cor002);
    border-radius: 3.25733px;
    flex: none;
    order: 3;
    flex-grow: 0;
`

export const StyledDivLogin = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;

    padding: 0 1rem 0 1rem;
`

export const StyledLinkLogin = styled(Link)`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 17.9153px;
    gap: 8.14px;
    width: 259.9px;
    height: 38.5px;
    background: #868e96;
    border: 0.9772px solid #868e96;
    border-radius: 3.25733px;
    flex: none;
    order: 3;
    flex-grow: 0;
    text-decoration: none;
    color: white;
`
