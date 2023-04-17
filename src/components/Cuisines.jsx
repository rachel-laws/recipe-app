import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';

function Cuisines() {
  const [cuisines, setCuisines] = useState([]);
  const params = useParams();

  const getCuisines = async name => {
    const resp = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_FOOD_API_KEY}&cuisine=${name}`
    );
    const data = await resp.json();

    return data.results;
  };

  useEffect(() => {
    let isMounted = true;
    getCuisines(params.type).then(data => {
      if (isMounted) setCuisines(data);
    });
    return () => {
      isMounted = false;
    };
  }, [params.type]);

  return (
    <Grid>
      {cuisines.map(item => (
        <Card key={item.id}>
          <Link to={`/cuisines/${item.id}`}>
            <img src={item.image} alt='' />
            <p>{item.title}</p>
          </Link>
        </Card>
      ))}
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 2rem;
`;

const Card = styled.div`
  img {
    border-radius: 2px;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    text-align: center;
    padding: 1rem;
  }
`;

export default Cuisines;
