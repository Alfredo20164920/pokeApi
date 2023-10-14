import { Ability, Stat } from '../../../types/data'
import { InfoContainer, AbilityItem, ItemContainer, Container, Title, ProgressContainer, TitleStats } from './styled'

interface IStatsInformationProps {
    abilities: Ability[] | undefined
    stats: Stat[] | undefined
}

const StatsInformation = ({abilities, stats}: IStatsInformationProps) => {
  return (
    <Container>
        <InfoContainer>
            <Title>Abilities</Title>
            <ItemContainer>
                {
                    abilities?.map((item, index) => (
                        <AbilityItem key={index}>
                            {item.ability.name}
                        </AbilityItem>
                    ))
                }
            </ItemContainer>
        </InfoContainer>
        <InfoContainer>
            <Title>Abilities</Title>
            <ItemContainer>
                {
                    stats?.map((item, index) => (
                        <ProgressContainer key={index}>
                            <TitleStats>{item.stat.name} - {item.base_stat}</TitleStats>
                            <progress value={item.base_stat} max={180} />
                        </ProgressContainer>
                    ))
                }
            </ItemContainer>
        </InfoContainer>
    </Container>
  )
}

export default StatsInformation