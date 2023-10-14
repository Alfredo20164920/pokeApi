import styled from "styled-components";

export const Container = styled.section`
    flex-grow: 1;
    height: 500px;
    background-color: #dee2e6;
    border-radius: 15px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 0 2em;
`

export const Title = styled.h2`
    font-size: 1.6rem;
    font-weight: 900;
    letter-spacing: 0.1rem;
    margin-bottom: 0.5em;
`

export const InfoContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const ItemContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
`