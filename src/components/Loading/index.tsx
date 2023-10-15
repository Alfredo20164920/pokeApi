import { pokeball } from "../../assets"
import { Container, Title } from "./styled"


const Loading = () => {
  return (
    <Container>
        <img src={pokeball} width={200}/>
        <Title>Loading...</Title>
    </Container>
  )
}

export default Loading