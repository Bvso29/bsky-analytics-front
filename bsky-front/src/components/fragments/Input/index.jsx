import React from 'react';
import { StyledInput, StyledInputContainer, StyledLabel } from './style';
import { useInteractionContext } from '../../../../providers/useInteractionContext.jsx'; // Importar o hook do contexto

const InputPad = ({ type, id, min, placeholder, label, value, onChange }) => {
    return (
        <StyledInputContainer className="textInputWrapper">
            <StyledLabel htmlFor={id}>{label}</StyledLabel>
            <StyledInput
                type={type}
                id={id}
                value={value} // Usar o valor passado como prop
                onChange={onChange} // Usar o onChange passado como prop
                min={min}
                placeholder={placeholder}
                className="textInput"
            />
        </StyledInputContainer>
    );
};

export default InputPad;