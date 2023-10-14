import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons'

import { ButtonStyled } from './styled'
import { ReactTypes } from '../../types/utils'

interface IPaginationProps extends ReactTypes {
    limit: number,
    offset: number
    setOffset: (arg0: number) => void
}   

const Pagination = ({ children, limit, offset, setOffset }: IPaginationProps) => {
    const lowerLimit = offset === 0;
    const higherLimit = Math.abs(offset - 153) <= limit;

    return (
        <>
            <ButtonStyled type="button" onClick={() => setOffset(offset - limit)} disabled={lowerLimit} $isdisabled={lowerLimit} >
                <FontAwesomeIcon icon={faCircleChevronLeft} fontSize={40} />
            </ButtonStyled>
                {children}
            <ButtonStyled type="button" onClick={() => setOffset(offset + limit)} disabled={higherLimit} $isdisabled={higherLimit} >
                <FontAwesomeIcon icon={faCircleChevronRight} fontSize={40} />
            </ButtonStyled>
        </>
    )
}

export default Pagination