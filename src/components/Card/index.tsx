
import { Result } from "../../types/data";
import { ReactTypes } from "../../types/utils";
import { StyledCard } from "./styled"

interface ICardProps extends ReactTypes {
  data: Result
  id: number
}

const Card = ({data, id}: ICardProps) => {
  const {name } = data;
  return (
    <StyledCard >
      {id} - {name}
    </StyledCard>
  )
}

export default Card;