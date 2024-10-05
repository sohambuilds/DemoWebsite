import React, { useEffect, useRef } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

const About = () => {
  const { scrollY } = useViewportScroll();
  const ref = useRef();

  const backgroundColor = useTransform(
    scrollY,
    [0, 300],
    ['rgba(15, 32, 39, 1)', 'rgba(44, 83, 100, 1)']
  );

  const y = useTransform(scrollY, [0, 300], [0, -50]);

  useEffect(() => {
    const updateMousePosition = (ev) => {
      if (ref.current) {
        const { clientX, clientY } = ev;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const x = (clientX - left) / width - 0.5;
        const y = (clientY - top) / height - 0.5;
        ref.current.style.transform = `perspective(1000px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg)`;
      }
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <motion.section
      style={{ backgroundColor }}
      className="min-h-screen relative overflow-hidden pt-32 pb-20"
    >
      <motion.div style={{ y }} className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 text-center text-white"
        >
          About Me
        </motion.h2>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-8 shadow-lg max-w-3xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-4 text-white"
          >
            Hello! I'm Soham Roy, a passionate Machine Learning student with a keen interest in solving real-world problems using data-driven approaches.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-4 text-white"
          >
            My journey in the world of AI and ML began when i was 12 months old. I'm particularly fascinated by web development.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-white"
          >
            When I'm not diving into datasets or training models, you can find me [your hobbies or interests].
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About;