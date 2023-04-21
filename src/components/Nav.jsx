import { NavLink } from 'react-router-dom';
import { GiCook } from 'react-icons/gi';
import styled from 'styled-components';
import Search from './Search';

function Nav() {
  return (
    <Header>
      <Wrapper>
        <Title>
          <GiCook></GiCook>
          <h1>
            Meal<span>Master</span>
          </h1>
        </Title>
        <Search />
      </Wrapper>
      <NavBar>
        <StyledLink to={'/'}>Home</StyledLink>
        <StyledLink>Meals</StyledLink>
        <StyledLink to={'/cuisines'}>Cuisines</StyledLink>
        <StyledLink>Diets</StyledLink>
        <StyledLink>Meal Plan</StyledLink>
        {/* Adds class of active */}
      </NavBar>
    </Header>
  );
}

const Wrapper = styled.div`
  display: flex;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem 0.15rem 0.5rem;

  h1 {
    font-size: 1.7rem;
    font-weight: 500;

    span {
      color: #cf6400;
      font-weight: 600;
    }
  }

  svg {
    font-size: 2.2rem;
    color: #e77100;
    margin-top: -6px;
    border-radius: 50%;
  }
`;

const Header = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 999;
  width: 100vw;
  padding-inline: 10% 11%;
  background: #fff;
  box-shadow: 0 0 10px rgb(0 0 0 / 0.5);
`;

const NavBar = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0rem;
`;

const StyledLink = styled(NavLink)`
  position: relative;
  padding: 0.25rem 0.5rem;
  font-weight: 600;

  // Make gradient
  &::after {
    content: '';
    position: absolute;
    left: 6%;
    bottom: -1px;
    width: 0%;
    height: 3px;
    background: #e77100;
  }

  &:hover::after {
    width: 90%;
    transition: 250ms ease;
  }

  // Add .active
  &:active {
    color: #e77100;
  }
`;

export default Nav;
