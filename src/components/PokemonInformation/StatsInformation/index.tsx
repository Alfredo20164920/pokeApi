import { Stats, Tag } from '../..'
import { Ability, Stat } from '../../../types/data'
import { InfoContainer, ItemContainer, Container, Title } from './styled'

interface IStatsInformationProps {
    abilities: Ability[] | undefined
    stats: Stat[] | undefined
}

const StatsInformation = ({ abilities, stats }: IStatsInformationProps) => {
    return (
        <Container>
            <InfoContainer>
                <Title>Abilities</Title>
                <ItemContainer>
                    {
                        abilities?.map((item, index) => (
                            <Tag text={item.ability.name} key={index} />
                        ))
                    }
                </ItemContainer>
            </InfoContainer>

            <Stats title='Stats' data={stats ?? []} />
        </Container>
    )
}

export default StatsInformation