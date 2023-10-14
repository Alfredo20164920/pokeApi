import styled from 'styled-components';

export const Container = styled.main`
    min-width: 100vw;
    min-height: 100vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
    background-color: #fff;

    @media (max-width: 950px) {
        grid-template-columns: 1fr;
    }
`;

export const LeftSide = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.5em;
`

export const Title = styled.h2`
    font-size: 3rem;
    color: #000;
    font-weight: 500;
`

export const Logo = styled.img`
    width: 100%;
    max-width: 20em;
`

export const ContainerImage = styled.div`
    width: 100%;
    display: grid;
    place-items: center;
    background-color: #e5e5e5;
    flex: 1;
    margin-top: 1.5em;
    border-radius: 1.5em;
`

export const RightSide = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2em;
    padding: 2em 1em;
    width: 100%;
    height: 100%;
`
