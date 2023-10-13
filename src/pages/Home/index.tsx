import axios from "axios";
import { useEffect, useState } from 'react';

import { Grid } from '../../components';
import { MainLayout } from "../../Layouts"
import { MainPokemon, Result } from '../../types/data';
import ButtonPagination from "../../components/ButtonPagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons/faCircleChevronLeft";

const Home = () => {
  const [data, setData] = useState<Result[]>([]);
  const [offset, setOffset] = useState(0);
  const limit = 20;

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}limit=20}`)
      .then((res) => {
        const { results } = res.data as MainPokemon;
        setData(results);
      });
  }, [offset]);

  const handleNext = () => {
    setOffset(offset + limit);
  }

  const handlePrev = () => {
    setOffset(offset - limit);
  }

  return (
    <MainLayout>
      <ButtonPagination
        action={handlePrev}
        isDisabled={offset === 0}
      >
        <FontAwesomeIcon icon={faCircleChevronLeft} fontSize={40} />
      </ButtonPagination>

      <Grid data={data} offset={offset} />

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