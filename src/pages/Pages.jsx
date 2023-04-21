import React from 'react';
import Home from './Home';
import Cuisines from './Cuisines';
import SearchResults from './SearchResults';
import Recipes from './Recipes';
import { Route, Routes } from 'react-router-dom';

function Pages() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cuisines/:type' element={<Cuisines />} />
      <Route path='/searchresults/:search' element={<SearchResults />} />
      <Route path='/recipe/:name' element={<Recipes />} />
    </Routes>
  );
}

export default Pages;
