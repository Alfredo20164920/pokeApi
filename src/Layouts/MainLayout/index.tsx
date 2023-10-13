import { logo, pokeball } from '../../assets'
import { Container, ContainerImage, LeftSide, Logo, Title } from './styled'

interface IMainLayoutProps {
    children: JSX.Element
}

const MainLayout = ({children}: IMainLayoutProps) => {
  return (
    <Container>
        <LeftSide>
            <Title>Choose your</Title>

            <Logo src={logo} width={'100'}/>
            <ContainerImage>
              <img src={pokeball} width={'350'}/>
            </ContainerImage>
        </LeftSide>
        <section>
            {children}
        </section>
    </Container>
  )
}

export default MainLayout