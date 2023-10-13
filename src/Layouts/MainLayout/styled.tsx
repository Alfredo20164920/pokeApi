import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    min-height: 100vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
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
    font-size: 3.2rem;
`

export const Logo = styled.img`
    width: 100%;
    max-width: 20em;
`

export const ContainerImage = styled.div`
    width: 100%;
    display: grid;
    place-items: center;
    background-color: white;
    flex: 1;
    margin-top: 1.5em;
    border-radius: 1.5em;
`

export const RightSide = styled.section`
    display: grid;
    grid-template-columns: repeat(2, minmax(100px, 1fr));
    gap: 1.2em;
    padding: 2em;
    width: 100%;
    height: 100%;
`
