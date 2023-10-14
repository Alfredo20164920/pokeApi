import styled from "styled-components";

export const Container = styled.section`
    width: 450px;
    height: 600px;
    background-color: #ced4da;
    border-radius: 15px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 0 2em;
`

export const Title = styled.h2`
    font-size: 1.6rem;
    font-weight: bold;
    letter-spacing: 0.4rem;
    margin-bottom: 1em;
`

export const InfoContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const ItemContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5em;
`

export const AbilityItem = styled.p`
    display: inline-block;
    flex-grow: 1;
    flex-basis: 20;
    color: black;
    background-color: #d5c7bc;
    padding: 0.5em 0.2em;
    text-align: center;
    font-weight: bold;
    letter-spacing: 0.3rem;
    text-transform: capitalize;
    border-radius: 5px;
`

export const ProgressContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;

`

export const TitleStats = styled.p`
    font-size: 1rem;
    font-weight: bold;
    text-transform: capitalize;
`