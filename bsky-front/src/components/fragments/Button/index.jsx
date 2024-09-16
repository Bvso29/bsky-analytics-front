import StyledButton from "./style";

const ButtonPad = ({ onClick, text }) => {
    return (
        <StyledButton onClick={onClick} content={text}>
            {text}
        </StyledButton>
    );
};

export default ButtonPad;