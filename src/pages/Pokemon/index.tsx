import { useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from "axios";
import { PokemonResult } from "../../types/data";
import { Container} from "./styled";
import { PokemonInformation } from "../../components";

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
      <PokemonInformation info={pokeInfo} />
      {/* <InfoContainer>
        <ImageContainer>
          <img src={pokeInfo?.sprites.front_default} />
          {
            pokeInfo?.types.map((item, index) => (<p key={index}>{item.type.name}</p>))
          }
        </ImageContainer>
        <DataContainer>
          <Title>{pokeInfo?.name}</Title>
          <article>
            <div>
              <h3>
                Heigh
              </h3>
              <p>{pokeInfo?.height}</p>
            </div>
            <div>
              <h3>
                Weight
              </h3>
              <p>{pokeInfo?.weight}</p>
            </div>
            <div>
              <h3>
                Experience
              </h3>
              <p>{pokeInfo?.base_experience}</p>
            </div>
          </article>

          <article>
            <h3>Abilities</h3>
            {
              pokeInfo?.abilities.map((item, index) => <p key={index}>{item.ability.name}</p>)
            }
          </article>

          <article>
            <h3>Stats</h3>
            {
              pokeInfo?.stats.map((item, index) => (
                <div key={index}>
                  <p>{item.stat.name}</p>
                  <progress max={100} value={item.base_stat} />
                </div>
              ))
            }
          </article>
        </DataContainer>
      </InfoContainer> */}
    </Container>
  )
}

export default Pokemon