import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

function Recipes() {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState('instructions');
  console.log(details);

  useEffect(() => {
    const fetchDetails = async () => {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
      );
      const detailsData = await data.json();
      setDetails(detailsData);
    };

    fetchDetails();
  }, [params.name]);

  return (
    <Wrapper>
      <h2>{details.title}</h2>
      <Container>
        <img src={details.image} alt='' />
        <div>
          <p>{`Ready in ${details.readyInMinutes} minutes`}</p>
          <p>{`Makes ${
            details.servings > 1
              ? `${details.servings} servings`
              : `${details.servings} serving`
          } `}</p>
          <p>{details.vegetarian === false ? '' : 'Vegetarian'}</p>
          <p>{details.vegan === false ? '' : 'Vegan'}</p>
          <p>{details.glutenFree === false ? '' : 'Gluten Free'}</p>
          <p>{details.dairyFree === false ? '' : 'Dairy Free'}</p>
        </div>
      </Container>
      <Info>
        <Buttons>
          <Button
            className={activeTab === 'instructions' ? 'active' : ''}
            onClick={() => {
              setActiveTab('instructions');
            }}>
            Instructions
          </Button>
          <Button
            className={activeTab === 'ingredients' ? 'active' : ''}
            onClick={() => {
              setActiveTab('ingredients');
            }}>
            Ingredients
          </Button>
        </Buttons>
        {activeTab === 'instructions' && (
          <div>
            <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
            <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
          </div>
        )}
        {activeTab === 'ingredients' && (
          <ul>
            {details.extendedIngredients.map(ingredient => {
              return <li key={ingredient.id}>{ingredient.original}</li>;
            })}
          </ul>
        )}
      </Info>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-block: 9rem 5rem;
  margin-inline: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  a {
    text-decoration: underline;
  }

  .active {
    background: #313131;
    color: white;
  }

  h2 {
    margin-bottom: 0.5rem;
    text-align: center;
  }

  p:not(ol) {
    line-height: 2rem;
    text-indent: 2rem;
  }

  li {
    font-size: 1.1rem;
    line-height: 2.5rem;
  }

  p + p {
    margin-top: 1rem;
  }

  ol {
    margin-top: 1rem;
    text-indent: 0rem;

    li::marker {
      color: #e77100;
    }
  }

  img {
    border-radius: 2px;
    filter: saturate(120%);
    object-fit: cover;
    width: 100%;
    max-width: 35rem;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 100% 30%;

  p {
    width: 13rem;
    margin: 0.5rem 0.75rem;
    font-weight: 500;
    text-indent: 0rem !important;
    line-height: 1rem !important;
  }

  @media all and (max-width: 1000px) {
    grid-template-columns: 100%;

    p {
      margin: 1rem 1px;
      display: inline;
      margin-right: 1.5rem;
    }
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  font-weight: 500;
  font-size: 1.1rem;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

const Button = styled.button`
  padding-block: 0.75rem;
  height: min-content;
  color: #313131;
  width: 8rem;
  background: #ececec;
  font-size: 1rem;
  font-family: inherit;
  border: 2px solid #313131;
  font-weight: 600;
  cursor: pointer;
  transition: 250ms ease;
`;

export default Recipes;
