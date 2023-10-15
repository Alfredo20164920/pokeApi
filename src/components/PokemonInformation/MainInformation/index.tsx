import { Information, Tag } from '../..'
import { Type } from '../../../types/data'
import { Container, DataInformation, ImageStyled,  TypesContainer } from './styled'

interface IMainInformationProps {
    image: string 
    types: Type[] 
    heighPokemon: number 
    experience: number 
    weightPokemon: number 
}

const MainInformation = ({image, types, heighPokemon, weightPokemon, experience}: IMainInformationProps) => {
  return (
    <Container data-testid="info--main">
        <ImageStyled data-testid="info--main_image" src={image} />
        
        <TypesContainer>
          {
            types?.map((item, index) => (
              <Tag text={item.type.name} key={index}/>
            ))
          }
        </TypesContainer>
        
        <DataInformation>
          <Information title='Height' data={heighPokemon ?? 0} />
          <Information title='Weight' data={weightPokemon ?? 0} />
          <Information title='Experience' data={experience ?? 0} />
        </DataInformation>
        
    </Container>
  )
}

export default MainInformation