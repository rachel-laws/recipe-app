import Popular from '../components/Popular';
import Breakfast from '../components/Breakfast';
import MainCourse from '../components/MainCourse';
import Sides from '../components/Sides';
import Dessert from '../components/Dessert';
import Veggie from '../components/Veggie';
import Vegan from '../components/Vegan';
import Paleo from '../components/Paleo';

import React from 'react';

function Home() {
  return (
    <div className='home'>
      <Popular />
      <Breakfast />
      <MainCourse />
      <Sides />
      <Dessert />
      <Veggie />
      <Vegan />
      <Paleo />
    </div>
  );
}

export default Home;
