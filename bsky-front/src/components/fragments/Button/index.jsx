import StyledButton from "./style";

const ButtonPad = ({ onClick, text, id }) => {
    return (
        <StyledButton onClick={onClick} content={text} id={id}>
            {text}
        </StyledButton>
    );
};

export default ButtonPad;