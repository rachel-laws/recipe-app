import { NavLink } from 'react-router-dom';
import { GiCook } from 'react-icons/gi';
import styled from 'styled-components';

function Nav() {
  return (
    <header>
      <Title>
        <GiCook />
        <h1 className='title'>
          Meal<span>Master</span>
        </h1>
      </Title>
      <nav>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink>Meals</NavLink>
        <NavLink to={'/cuisines'}>Cuisines</NavLink>
        <NavLink>Diets</NavLink>
        <NavLink>Ingredients</NavLink>
        <NavLink>Meal Plan</NavLink>
        {/* Adds class of active */}
      </nav>
    </header>
  );
}

const Title = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem 0.45rem 0.5rem;

  svg {
    font-size: 2.2rem;
    color: #e77100;
    margin-top: -6px;
    border-radius: 50%;
  }
`;

export default Nav;
