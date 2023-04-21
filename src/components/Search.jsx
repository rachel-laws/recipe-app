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
    </Form>
  );
}

const Form = styled.form`
  position: relative;
  margin: auto;
  margin-right: 4.3rem;
  padding: 1.5rem 0.5rem 0.5rem;
  width: 15rem;

  input {
    border: none;
    background: #ececec;
    font-family: inherit;
    font-weight: 500;
    font-size: 1rem;
    height: 1.3rem;
    padding: 1rem 1.5rem 1rem 2.2rem;
    border-radius: 1rem;
    outline-color: #e77100;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 8%;
    color: #e77100;
  }
`;

export default Search;
