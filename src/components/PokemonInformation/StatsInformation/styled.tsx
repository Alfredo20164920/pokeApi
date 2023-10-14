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
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
`