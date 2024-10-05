import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import SnowfallBackground from './SnowFallBackground';

const useTypewriter = (words, speed = 100, delay = 1500) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setText(words[index].substring(0, subIndex));
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words, speed]);

  return text;
};

const AnimatedGradientBackground = () => {
    const canvasRef = useRef(null);
  
    useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      let animationFrameId;
  
      const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };
  
      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);
  
      const colors = [
        { r: 15, g: 32, b: 39 },  // #0f2027
        { r: 32, g: 58, b: 67 },  // #203a43
        { r: 44, g: 83, b: 100 }  // #2c5364
      ];
  
      let t = 0;
  
      const animate = () => {
        t += 0.002; // Reduced speed for smoother transition
        ctx.clearRect(0, 0, canvas.width, canvas.height);
  
        const x1 = Math.sin(t) * 0.5 + 0.5;
        const y1 = Math.cos(t) * 0.5 + 0.5;
        const x2 = Math.cos(t) * 0.5 + 0.5;
        const y2 = Math.sin(t * 0.8) * 0.5 + 0.5;
  
        const gradientAnimated = ctx.createLinearGradient(
          x1 * canvas.width, 
          y1 * canvas.height, 
          x2 * canvas.width, 
          y2 * canvas.height
        );
  
        colors.forEach((color, index) => {
          const offset = (Math.sin(t * 2 + index * Math.PI * 2 / 3) + 1) / 2;
          const r = Math.floor(color.r * (1 - offset) + colors[(index + 1) % 3].r * offset);
          const g = Math.floor(color.g * (1 - offset) + colors[(index + 1) % 3].g * offset);
          const b = Math.floor(color.b * (1 - offset) + colors[(index + 1) % 3].b * offset);
          gradientAnimated.addColorStop(index / 2, `rgb(${r},${g},${b})`);
        });
  
        ctx.fillStyle = gradientAnimated;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
  
        animationFrameId = requestAnimationFrame(animate);
      };
  
      animate();
  
      return () => {
        window.removeEventListener('resize', resizeCanvas);
        cancelAnimationFrame(animationFrameId);
      };
    }, []);
  
    return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />;
  };
  

const Hero = () => {
    const typewriterText = useTypewriter([
      "Machine Learning Enthusiast",
      "Aspiring ML Engineer",
      "AI Researcher"
    ], 100, 1500);
  
    return (
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gray-900 text-white py-20 relative"
        id="home"
      ><AnimatedGradientBackground />
        <SnowfallBackground />
        <div className="container mx-auto px-4 relative z-20">
          <motion.h1 
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Hi, I'm Soham
          </motion.h1>
          <motion.div
            className="text-xl mb-8 h-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {typewriterText}
          </motion.div>
          <motion.button 
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Projects
          </motion.button>
        </div>
      </motion.section>
    );
  };
  
export default Hero;