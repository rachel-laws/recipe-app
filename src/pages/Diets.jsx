import React from 'react';
import Veggie from '../components/Veggie';
import Vegan from '../components/Vegan';
import Paleo from '../components/Paleo';
import Ketogenic from '../components/Ketogenic';
import { motion } from 'framer-motion';

function Diets() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}>
      <div className='diet'>
        <Veggie />
        <Vegan/>
        <Paleo />
        <Ketogenic />
      </div>
    </motion.div>
  );
}

export default Diets;
