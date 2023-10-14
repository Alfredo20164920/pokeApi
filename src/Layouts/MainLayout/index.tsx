import {useSelector} from 'react-redux'

import { Container, ContainerImage, LeftSide, Logo, RightSide, Title } from './styled'
import { logo } from '../../assets'
import { ReactTypes } from '../../types/utils'
import { IRootState } from '../../types/redux'

interface IMainLayoutProps extends ReactTypes {
}

const MainLayout = ({children}: IMainLayoutProps) => {
  const {imageUrl}  = useSelector((state: IRootState) => state.pokemonImage);

  return (
    <Container>
        <LeftSide>
            <Title>Choose your</Title>

            <Logo src={logo} width={'100'}/>
            <ContainerImage>
              <img src={imageUrl} width={'350'}/>
            </ContainerImage>
        </LeftSide>
        <RightSide>
            {children}
        </RightSide>
    </Container>
  )
}

export default MainLayout