import React from 'react';
import Home from './Home';
import Cuisines from './Cuisines';
import SearchResults from './SearchResults';
import Recipes from './Recipes';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Diets from './Diets';

function Pages() {
  const location = useLocation();
  return (
    <AnimatePresence mode='wait'>
      <Routes Location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/diets' element={<Diets />} />
        <Route path='/cuisines/:type' element={<Cuisines />} />
        <Route path='/searchresults/:search' element={<SearchResults />} />
        <Route path='/recipes/:name' element={<Recipes />} />
      </Routes>
    </AnimatePresence>
  );
}

export default Pages;
