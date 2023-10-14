import { useState } from 'react';

import { MainLayout } from "../../Layouts"
import { useApi } from "../../hooks/useApi";
import { MainPokemon } from '../../types/data';
import { Grid, Pagination } from '../../components';

const Home = () => {
  const [offset, setOffset] = useState(0);
  const limit = 20;
  const {data, isLoading, error} = useApi<MainPokemon>(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}limit=20}`, 'get');


  if(isLoading) return <p>Loading</p>
  if(error) {
    return <p>Error 404</p>
  }

  return (
    <MainLayout>
      <Pagination limit={limit} offset={offset} setOffset={setOffset}>
        <Grid data={data?.results} offset={offset} pokemonsLimit={153} />
      </Pagination>
    </MainLayout>
  )
}

export default Home