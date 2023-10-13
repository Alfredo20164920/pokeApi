
import { Result } from "../../types/data";
import { ReactTypes } from "../../types/utils";
import { StyledCard } from "./styled"

interface ICardProps extends ReactTypes {
  data: Result
}

const Card = ({data}: ICardProps) => {
  const {name } = data;
  return (
    <StyledCard >
      {name}
    </StyledCard>
  )
}

export default Card;