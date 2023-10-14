import { PokemonResult } from '../../types/data';
import MainInformation from './MainInformation';
import StatsInformation from './StatsInformation';

interface IPokemonInformatinProps {
  info: PokemonResult | undefined
}

const PokemonInformation = ({ info }: IPokemonInformatinProps) => {
  return (
    <>
      <MainInformation 
        weightPokemon={info?.weight} 
        heighPokemon={info?.height} 
        experience={info?.base_experience} 
        image={info?.sprites.front_default} 
        types={info?.types}
      />
      <StatsInformation 
        abilities={info?.abilities}
        stats={info?.stats}
      />
    </>
  )
}

export default PokemonInformation