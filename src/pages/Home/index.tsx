import { useEffect, useState } from 'react';
import { MainLayout } from "../../Layouts"
import axios from "axios";
import { Result } from '../../types/data';
import { Card } from '../../components';

const Home = () => {
  const [data, setData] = useState<Result[]>([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=20")
      .then((res) => setData(res.data.results));
  }, []);
  
  return (
    <MainLayout>
      {
        data.map((item, index) => (
          <Card key={index} data={item} />
        ))
      }
    </MainLayout>
  )
}

export default Home