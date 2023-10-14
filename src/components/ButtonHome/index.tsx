import { useNavigate } from 'react-router-dom';
import { ReactTypes } from '../../types/utils'
import { StyledButton } from './styled'
import { useDispatch } from 'react-redux';
import { addImage } from '../../context/ImgCtx';
import { pokeball } from '../../assets';

interface IButtonHomeProps extends ReactTypes {
    
}

const ButtonHome = ({children}: IButtonHomeProps) => {
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const handleHome = () => {
        navigate('/');
        dispatch(addImage({imageUrl: pokeball}))
      }

    return (
        <StyledButton onClick={handleHome}>{ children }</StyledButton>
    )
}

export default ButtonHome