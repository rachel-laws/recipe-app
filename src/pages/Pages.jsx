import React from 'react';
import Home from './Home';
import Cuisines from './Cuisines';
import { Route, Routes } from 'react-router-dom';

function Pages() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Cuisines' element={<Cuisines />} />
    </Routes>
  );
}

export default Pages;
