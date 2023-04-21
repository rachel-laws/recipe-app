import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { Link } from 'react-router-dom';

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const checkStorage = localStorage.getItem('popular');

    if (checkStorage) {
      setPopular(JSON.parse(checkStorage));
    } else {
      // 12 random popular recipes
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12`
      );
      const data = await api.json();

      localStorage.setItem('popular', JSON.stringify(data.recipes));
      setPopular(data.recipes);
      console.log(data.recipes);
    }
  };

  return (
    <div>
      <Wrapper>
        <h3>Popular Picks</h3>
        <Splide
          options={{
            perPage: 3,
            drag: 'free',
            pagination: false,
            gap: '1rem',
          }}>
          {popular.map(recipe => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <Link to={'/recipes/' + recipe.id}>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title}></img>
                    <Gradient></Gradient>
                  </Link>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  margin: 4rem 0rem;

  h3 {
    font-size: 2.25rem;
    padding: 1rem 0rem;
  }
`;

const Card = styled.div`
  position: relative;
  min-height: 20rem;
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

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgb(0 0 0 / 0.2), rgb(0 0 0 / 0));
`;

export default Popular;
