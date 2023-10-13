import { Container, ContainerImage, LeftSide, Logo, RightSide, Title } from './styled'
import { logo, pokeball } from '../../assets'
import { ReactTypes } from '../../types/utils'

interface IMainLayoutProps extends ReactTypes {
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
        <RightSide>
            {children}
        </RightSide>
    </Container>
  )
}

export default MainLayout