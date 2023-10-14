import { MouseEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { PokemonResult, Result } from "../../types/data";
import { ReactTypes } from "../../types/utils";
import { StyledCard } from "./styled"
import { addImage } from '../../context/ImgCtx';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface ICardProps extends ReactTypes {
  data: Result
  id: number
}

const Card = ({ data, id }: ICardProps) => {

  const [imageData, setImageData] = useState<string>('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { name, url } = data;

  useEffect(() => {
    axios.get(url)
      .then(res => {
        const {sprites} = res.data as PokemonResult;
        setImageData(sprites.front_default);
      });
  }, [url])


  const handleClick = (e: MouseEvent) => {
    switch (e.detail) {
      case 1: {
        dispatch(addImage({imageUrl: imageData}))
        break;
      }
      case 2: {
        navigate(`/${name}`, {state: {url}});
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