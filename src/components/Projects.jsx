import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "ML Project 1",
      description: "Brief description of your first ML project.",
      technologies: ["Python", "TensorFlow", "Scikit-learn"]
    },
    {
      title: "Data Analysis Project",
      description: "Overview of a data analysis project ",
      technologies: ["Python", "Pandas", "Matplotlib"]
    },
    {
      title: "AI Research Paper",
      description: "Summary of a research paper.",
      technologies: ["LaTeX", "PyTorch", "NLTK"]
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-20 bg-white"
      id="projects"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-blue-200 text-blue-800 text-sm px-2 py-1 rounded mr-2 mb-2">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;