import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

function Cuisines() {
  return (
    <Wrapper className='cuisines'>
      <List>
        <NavLink to={'/cuisines/Italian'}>Italian</NavLink>
        <NavLink to={'/cuisines/American'}>American</NavLink>
        <NavLink to={'/cuisines/Southern'}>Southern</NavLink>
        <NavLink to={'/cuisines/Cajun'}>Cajun</NavLink>
        <NavLink to={'/cuisines/Mexican'}>Mexican</NavLink>
        <NavLink to={'/cuisines/Spanish'}>Spanish</NavLink>
        <NavLink to={'/cuisines/Caribbean'}>Caribbean</NavLink>
        <NavLink to={'/cuisines/LatinAmerican'}>Latin American</NavLink>
        <NavLink to={'/cuisines/Chinese'}>Chinese</NavLink>
        <NavLink to={'/cuisines/Thai'}>Thai</NavLink>
        <NavLink to={'/cuisines/Korean'}>Korean</NavLink>
        <NavLink to={'/cuisines/Japanese'}>Japanese</NavLink>
        <NavLink to={'/cuisines/Indian'}>Indian</NavLink>
        <NavLink to={'/cuisines/Jewish'}>Jewish</NavLink>
        <NavLink to={'/cuisines/MiddleEastern'}>Middle Eastern</NavLink>
        <NavLink to={'/cuisines/Mediterranean'}>Mediterranean</NavLink>
        <NavLink to={'/cuisines/Greek'}>Greek</NavLink>
        <NavLink to={'/cuisines/French'}>French</NavLink>
        <NavLink to={'/cuisines/German'}>German</NavLink>
        <NavLink to={'/cuisines/Nordic'}>Nordic</NavLink>
        <NavLink to={'/cuisines/Irish'}>Irish</NavLink>
        <NavLink to={'/cuisines/British'}>British</NavLink>
        <NavLink to={'/cuisines/African'}>African</NavLink>
        <NavLink to={'/cuisines/EasternEuropean'}>Eastern European</NavLink>
      </List>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const List = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(3, 11rem);
  grid-template-rows: repeat(8, 32px);
  grid-auto-flow: column;

  padding: 1rem;
  background: rgb(220 220 220);
  border-radius: 2px;

  font-size: 1rem;
  text-align: center;
  font-weight: 600;
`;

export default Cuisines;
