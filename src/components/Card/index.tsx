import { MouseEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Pokemon, Result } from "../../types/data";
import { ReactTypes } from "../../types/utils";
import { StyledCard } from "./styled"
import { addImage } from '../../context/ImgCtx';
import axios from 'axios';
import { IRootState } from '../../types/redux';

interface ICardProps extends ReactTypes {
  data: Result
  id: number
}

const Card = ({ data, id }: ICardProps) => {

  const dispatch = useDispatch();
  const {imageUrl}  = useSelector((state: IRootState) => state.pokemonImage);

  const { name, url } = data;

  useEffect(() => {
    axios.get(imageUrl)
      .then(res => {
        const {sprites} = res.data as Pokemon;
        dispatch(addImage({imageUrl: sprites.front_default}));
      });
  }, [imageUrl, dispatch])


  const handleClick = (e: MouseEvent) => {
    switch (e.detail) {
      case 1: {
        dispatch(addImage({imageUrl: url }))
        break;
      }
      case 2: {
        console.log(2);
        break;
      }
      default: {
        break;
      }
    }
  }

  return (
    <StyledCard onClick={handleClick}>
      {id} - {name}
    </StyledCard>
  )
}

export default Card;