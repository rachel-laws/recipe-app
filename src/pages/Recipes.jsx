import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

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
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}>
      <Wrapper>
        <h2>{details.title}</h2>
        <img src={details.image} alt='' />
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
          {/* <Container>
          <p>{`Ready in ${details.readyInMinutes} minutes • `}</p>
          <p>{`Makes ${
            details.servings > 1
              ? `${details.servings} servings • `
              : `${details.servings} serving • `
          } `}</p>
          <p>{details.vegetarian === false ? '' : 'Vegetarian • '}</p>
          <p>{details.vegan === false ? '' : 'Vegan • '}</p>
          <p>{details.glutenFree === false ? '' : 'Gluten Free • '}</p>
          <p>{details.dairyFree === false ? '' : 'Dairy Free'}</p>
        </Container> */}
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
    </motion.div>
  );
}

const Wrapper = styled.div`
  margin-block: 9rem 5rem;
  margin-inline: 5vw;
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
    margin-top: 1rem;
  }

  p:not(ol) {
    line-height: 2rem;
    text-indent: 2rem;
  }

  li {
    font-size: 1.1rem;
    line-height: 2rem;
  }

  p + p {
    margin-block: 1rem;
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

// const Container = styled.div`

//   p {
//     display: inline;
//     font-weight: 500;
//     text-indent: 0rem !important;
//     line-height: 1rem !important;
//   }
// `;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  font-weight: 500;
  font-size: 1.1rem;
  max-width: 50rem;
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
