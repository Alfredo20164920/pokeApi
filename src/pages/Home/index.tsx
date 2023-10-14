import { useState } from 'react';

import { Grid } from '../../components';
import { MainLayout } from "../../Layouts"
import { MainPokemon } from '../../types/data';
import ButtonPagination from "../../components/ButtonPagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons/faCircleChevronLeft";
import { useApi } from "../../hooks/useApi";

const Home = () => {
  const [offset, setOffset] = useState(0);
  const limit = 20;
  const {data, isLoading, error} = useApi<MainPokemon>(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}limit=20}`, 'get');

  const handleNext = () => {
    setOffset(offset + limit);
  }

  const handlePrev = () => {
    setOffset(offset - limit);
  }

  if(error) {
    return <p>Error 404</p>
  }
  if(isLoading) return <p>Loading</p>

  return (
    <MainLayout>
      <ButtonPagination
        action={handlePrev}
        isDisabled={offset === 0}
      >
        <FontAwesomeIcon icon={faCircleChevronLeft} fontSize={40} />
      </ButtonPagination>

      <Grid data={data?.results} offset={offset} />

      <ButtonPagination
        action={handleNext}
        isDisabled={Math.abs(offset - 153) <= limit}
      >
        <FontAwesomeIcon icon={faCircleChevronRight} fontSize={40} />
      </ButtonPagination>


    </MainLayout>
  )
}

export default Home