import styled from "styled-components"

const StyledButton = styled.button`
    font-size: 16px;
    width: 14rem;
    height: 4rem;
    border: none;
    border-radius: 10px;
    background: linear-gradient(
        to right,
        var(--Bkg001),
        #072a5d,
        var(--Bkg001),
        var(--Bkg001),
        #072a5d,
        var(--Bkg001)
    );
    background-size: 250%;
    background-position: left;
    color: #ffd277;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition-duration: 1s;
    overflow: hidden;


    &::before {
    position: absolute;
    content: "${props => props.content}";
    color: var(--Cor000);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 97%;
    height: 90%;
    border-radius: 8px;
    transition-duration: 1s;
    background-color: rgba(0, 0, 0, 0.842);
    background-size: 200%;
  }
    &:hover {
        background-position: right;
        transition-duration: 1s;
    }

    &:hover::before {
        background-position: right;
        transition-duration: 1s;
    }

    &:active {
        transform: scale(0.95);
    }
`

export default StyledButton
