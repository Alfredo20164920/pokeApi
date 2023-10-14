import { ReactTypes } from "../../types/utils"
import { ButtonStyled } from "./styled"

interface IButtonPagination extends ReactTypes {
  action: () => void,
  isDisabled: boolean,
}

const ButtonPagination = ({action, isDisabled, children}: IButtonPagination) => {
  return (
    <ButtonStyled type="button" onClick={action} disabled={isDisabled} $isdisabled={isDisabled} >
      {children}
    </ButtonStyled>
  )
}

export default ButtonPagination