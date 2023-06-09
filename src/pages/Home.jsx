import React from 'react';
import Popular from '../components/Popular';
import Breakfast from '../components/Breakfast';
import Dessert from '../components/Dessert';
import Veggie from '../components/Veggie';
import Vegan from '../components/Vegan';
import Paleo from '../components/Paleo';
import Beverage from '../components/Beverage';
import { motion } from 'framer-motion';

function Home() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}>
      <div className='home'>
        <Popular />
        <Beverage/>
        <Breakfast />
        <Dessert />
        <Veggie />
        <Vegan />
        <Paleo />
      </div>
    </motion.div>
  );
}

export default Home;
