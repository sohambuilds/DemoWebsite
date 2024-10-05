import React from 'react';
import { motion } from 'framer-motion';
import RTXIceCubes from './RTXIceCubes';

const Skills = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-20 bg-gradient-to-b from-gray-900 to-blue-900"
      id="skills"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-white">My Skills</h2>
        <p className="text-center text-blue-200 mb-8">Explore my technical expertise</p>
        <div className="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl">
          <RTXIceCubes />
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;