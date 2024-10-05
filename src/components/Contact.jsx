import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-20 bg-gray-100"
      id="contact"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
        <div className="max-w-md mx-auto">
          <p className="text-center mb-8">
            I'm always open to discussing data science projects or opportunities.
          </p>
          <motion.div 
            className="bg-white p-8 rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <p className="mb-4">
              <strong>Email:</strong> sohamroy.dev@gmail.com
            </p>
            <p className="mb-4">
              <strong>LinkedIn:</strong> linkedin.com/in/sohamr
            </p>
            <p>
              <strong>GitHub:</strong> github.com/sohambuilds
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;