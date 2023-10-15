import { Progressbar } from '..'
import { Stat } from '../../types/data'
import { Container, Title } from './styled'

interface IStatProp {
    title: string,
    data: Stat[] 
}

const Stats = ({ title, data }: IStatProp) => {
    return (
        <Container data-testid="info--stats">
            <Title>{title}</Title>
            {
                data?.map((item, index) => (
                    <Progressbar key={index} title={item.stat.name} maxValue={180} value={item.base_stat} />
                ))
            }
        </Container>
    )
}

export default Stats