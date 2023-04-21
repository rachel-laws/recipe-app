import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

function Recipes() {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState('instructions');

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
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt='' />
      </div>
      <Info>
        <div>
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
        </div>
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
  margin-top: 9rem;
  margin-bottom: 5rem;
  display: flex;
  justify-content: center;

  .active {
    background: #313131;
    color: white;
  }

  h2 {
    margin-bottom: 2rem;
  }

  li {
    font-size: 1.1rem;
    line-height: 2.5rem;
  }

  ul {
    margin-top: 2rem;
  }

  img {
    border-radius: 2px;
    filter: saturate(120%);
  }
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
  margin-right: 2rem;
  font-weight: 600;
  cursor: pointer;
  transition: 250ms ease;
`;

const Info = styled.div`
  margin-top: 3.85rem;
  margin-left: 3rem;
  display: flex;
`;

export default Recipes;
