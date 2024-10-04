import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <motion.div 
            className="text-xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Soham Roy
          </motion.div>
          <ul className="flex space-x-4">
            {navItems.map((item, index) => (
              <motion.li 
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className="text-gray-600 hover:text-gray-900"
                  onClick={(e) => handleScroll(e, item.toLowerCase())}
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;