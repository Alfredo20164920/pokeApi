import styled from "styled-components";

interface IButtonProps {
    $isdisabled: boolean
}

export const ButtonStyled = styled.button<IButtonProps>`
    border: none;
    background: none;
    cursor: pointer;
    height: fit-content;
    align-self: center;
    color: ${props => props.$isdisabled ? '#6c757d' : '#fff'};
`