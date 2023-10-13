import styled from "styled-components";

interface IButtonProps {
    isDisabled: boolean
}

export const ButtonStyled = styled.button<IButtonProps>`
    border: none;
    background: none;
    cursor: pointer;
    height: fit-content;
    align-self: center;
    color: ${props => props.isDisabled ? '#6c757d' : '#fff'};
`