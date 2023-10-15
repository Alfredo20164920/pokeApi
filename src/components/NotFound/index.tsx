import { notFound } from "../../assets"
import { Container, Title } from "./styled"

const NotFound = () => {
  return (
    <Container data-testid="error--404">
      <Title>404 Not found</Title>
      <img src={notFound}  width={450}/>
    </Container>
  )
}

export default NotFound