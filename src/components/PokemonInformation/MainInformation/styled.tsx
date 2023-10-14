import styled from "styled-components";

export const Container = styled.section`
    flex-grow: 1;
    height: 500px;
    background-color: #dee2e6;
    border-radius: 15px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 0 2em;
`

export const ImageStyled = styled.img`
    width: 20em;
`

export const TypesContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
`

export const DataInformation = styled.section`
    display: flex;
    flex-direction: row;
    height: 30%;
    width: 100%;
`