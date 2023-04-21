import styled from 'styled-components';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Search() {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const submitHandler = e => {
    e.preventDefault();
    navigate('/searchresults/' + input);
    setInput('');
  };

  return (
    <Form onSubmit={submitHandler}>
      <FaSearch></FaSearch>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        type='text'
        name='searchRecipe'
        id='searchRecipe'
      />
      <p>Search recipes by keyword</p>
    </Form>
  );
}

const Form = styled.form`
  position: relative;
  margin-inline: auto 0.5rem;
  margin-bottom: 0.5rem;
  align-self: flex-end;

  input {
    border: none;
    background: #ececec;
    font-family: inherit;
    font-weight: 400;
    font-size: 1rem;
    height: 2rem;
    width: 18rem;
    padding: 1rem 1.5rem 1rem 2.2rem;
    border-radius: 1rem;
    outline-color: #e77100;
  }

  svg {
    position: absolute;
    top: 26%;
    left: 4%;
    color: #e77100;
  }

  p {
    font-size: 0.8rem;
    position: absolute;
    right: 0.5rem;
    margin-top: 0.1rem;
    font-style: italic;
    color: gray;
  }
`;

export default Search;
