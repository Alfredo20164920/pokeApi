import styled from "styled-components";

export const Container = styled.section`
    width: 450px;
    height: 600px;
    background-color: white;
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

export const Types = styled.p`
    display: inline-block;
    flex-grow: 1;
    flex-basis: 50;
    color: black;
    background-color: #d5c7bc;
    padding: 0.5em 0.2em;
    text-align: center;
    font-weight: bold;
    letter-spacing: 0.5rem;
    text-transform: capitalize;
    border-radius: 5px;
`

export const DatInformation = styled.section`
    display: flex;
    flex-direction: row;
    height: 30%;
    width: 100%;
`

export const SingleInformation = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: space-between;
    color: black;
    text-align: center;
`

export const TitleInformation = styled.p`
    font-size: 1.2rem;
    font-weight: thin;
    color: #343a40;
`

export const SubtitleInformation = styled.p`
    font-size: 1.4rem;
    font-weight: bold;
`