import axios from "axios";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

import { CardsContainer, Container} from "./styled";
import { pokeball } from "../../assets";
import { PokemonResult } from "../../types/data";
import { ButtonHome, MainInformation, StatsInformation } from "../../components";

const Pokemon = () => {
  const [pokeInfo, setPokeInfo] = useState<PokemonResult>()
  const {pokemon} = useParams();
  
  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then(res => {
        setPokeInfo(res.data)
      })
  }, [pokemon]);

  if(!pokeInfo) return <p>Error</p>
  return (
    <Container>
      <CardsContainer>
        <MainInformation 
          weightPokemon={pokeInfo?.weight ?? 0} 
          heighPokemon={pokeInfo?.height ?? 0} 
          experience={pokeInfo?.base_experience ?? 0} 
          image={pokeInfo?.sprites.front_default ?? pokeball} 
          types={pokeInfo?.types ?? []}
        />
        <StatsInformation 
          abilities={pokeInfo?.abilities}
          stats={pokeInfo?.stats}
        />
      </CardsContainer>
      <ButtonHome>HOME</ButtonHome>
    </Container>
  )
}

export default Pokemon