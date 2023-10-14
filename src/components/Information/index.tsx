import { Container, Subtitle, Title } from './styled'

interface IInformationProps {
    title: string,
    data: number
}

const Information = ({title, data}: IInformationProps) => {
    return (
        <Container>
            <Title>{title}</Title>
            <Subtitle>{data}</Subtitle>
        </Container>
    )
}

export default Information