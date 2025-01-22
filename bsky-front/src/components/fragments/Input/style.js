import styled from "styled-components"

export const StyledInputContainer = styled.div`
    position: relative;
    width: 180px;
    margin: 12px 5px;
    --accent-color: var(--Cor002);

    &:before {
        transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        border-bottom: 1px solid rgba(0, 0, 0, 0.42);
    }

    &:before,
    &:after {
        content: "";
        left: 0;
        right: 0;
        position: absolute;
        pointer-events: none;
        bottom: -2px;
        z-index: 4;
        width: 100%;
    }

    &:focus-within:before {
        border-bottom: 1px solid var(--accent-color);
    }

    &:focus-within:before {
        border-bottom: 1px solid var(--accent-color);
        transform: scaleX(1);
    }

    &:focus-within:after {
        border-bottom: 2px solid var(--accent-color);
        transform: scaleX(1);
    }

    &:after {
        content: "";
        transform: scaleX(0);
        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1) 0ms;
        will-change: transform;
        border-bottom: 2px solid var(--accent-color);
        border-bottom-color: var(--accent-color);
    }
`

export const StyledInput = styled.input`
    border-radius: 1rem 1rem 0px 0px;
    max-height: 36px;
    background-color: var(--Bkg002);
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 200ms;
    transition-property: background-color;
    color: #e8e8e8;
    font-size: 14px;
    font-weight: 500;
    padding: 12px;
    width: 100%;
    box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 1px;
    border: none;

    &::placeholder {
        transition: opacity 250ms cubic-bezier(0, 0, 0.2, 1) 0ms;
        opacity: 1;
        user-select: none;
        color: rgba(255, 255, 255, 0.582);
    }

    &:focus,
    &:active {
        outline: none;
    }

    &:focus,
    &:active {
        background-color:  var(--Bkg002);
    }

    &:focus::placeholder {
        opacity: 0;
    }
`
export const StyledLabel = styled.label`
  font-size: 16px;
  font-weight: 500;
  color: #e8e8e8;
  margin-bottom: 8px;
  display: block;
`;
