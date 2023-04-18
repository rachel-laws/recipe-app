import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';

function Cuisines() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const getCuisine = async name => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}&number=32`
    );
    const recipes = await data.json();
    setCuisine(recipes.results);
  };

  useEffect(() => {
    getCuisine(params.type);
    console.log(params.type);
  }, [params.type]);

  return (
    <Wrapper>
      <h3>{params.type} Cuisine</h3>
      <Grid>
        {cuisine.map(item => {
          return (
            <Card key={item.id}>
              <p>{item.title}</p>
              <img src={item.image} alt='' />
            </Card>
          );
        })}
      </Grid>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 7rem 0rem 4rem;

  h3 {
    font-size: 2.25rem;
    padding: 3.5rem 0rem;
    text-align: center;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  gap: 2rem;
`;

const Card = styled.div`
  position: relative;
  min-height: 15rem;
  border-radius: 2px;
  overflow: hidden;
  cursor: pointer;
  filter: saturate(120%);
  transition: 350ms ease;

  img {
    border-radius: 2px;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 350ms ease;
  }

  :hover,
  :focus-visible {
    filter: saturate(140%);

    img {
      width: 105%;
      height: 105%;
      transform: translate(-9px);
    }
  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    top: 0%;
    transform: translate(-50%, 0%);
    color: #fff;
    width: 100%;
    padding: 1rem 0.75rem 1.5rem;
    text-align: center;
    font-weight: 600;
    font-size: 1.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(rgb(0 0 0 / 0.9), rgb(0 0 0 / 0));
  }
`;

export default Cuisines;
