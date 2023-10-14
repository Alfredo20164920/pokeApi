import { Type } from '../../../types/data'
import { Container, DatInformation, ImageStyled, SingleInformation, SubtitleInformation, TitleInformation, Types, TypesContainer } from './styled'

interface IMainInformationProps {
    image: string | undefined
    types: Type[] | undefined
    heighPokemon: number | undefined
    experience: number | undefined
    weightPokemon: number | undefined
}

const MainInformation = ({image, types, heighPokemon, weightPokemon, experience}: IMainInformationProps) => {

  return (
    <Container>

        <ImageStyled src={image} />
        <TypesContainer>
          {
            types?.map((item, index) => (
              <Types key={index}>
                {item.type.name}
              </Types>
            ))
          }
        </TypesContainer>
        
        <DatInformation>
          <SingleInformation>
            <TitleInformation>Height</TitleInformation>
            <SubtitleInformation>{heighPokemon}</SubtitleInformation>
          </SingleInformation>
          <SingleInformation>
            <TitleInformation>Weight</TitleInformation>
            <SubtitleInformation>{weightPokemon}</SubtitleInformation>
          </SingleInformation>
          <SingleInformation>
            <TitleInformation>Experience</TitleInformation>
            <SubtitleInformation>{experience}</SubtitleInformation>
          </SingleInformation>
        </DatInformation>
        
    </Container>
  )
}

export default MainInformation