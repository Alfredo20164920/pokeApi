import { useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from "axios";
import { PokemonResult } from "../../types/data";
import { Container} from "./styled";
import { MainInformation, StatsInformation } from "../../components";
import { pokeball } from "../../assets";

const Pokemon = () => {
  const [pokeInfo, setPokeInfo] = useState<PokemonResult>()
  const location = useLocation();

  const { url } = location.state;

  useEffect(() => {
    axios.get(url)
      .then(res => {
        setPokeInfo(res.data)
      })
  }, [url])

  
  return (
    <Container>
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
    </Container>
  )
}

export default Pokemon