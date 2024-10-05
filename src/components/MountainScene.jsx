import React from "react";
import { motion } from "framer-motion";

const MountainScene = () => {
  return (
    <svg
      viewBox="0 0 1200 300"
      preserveAspectRatio="none"
      className="absolute bottom-0 left-0 w-full"
      style={{ height: "30vh", background: "rgba(0,0,0,0.1)", overflow: "visible", border: "2px solid red" }}
    >
      {/* Background mountain */}
      <motion.path
        d="M0 300L300 200L600 250L900 180L1200 250L1200 300H0Z"
        fill="#a3b8cc"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      />

      {/* Foreground mountain */}
      <motion.path
        d="M0 300L400 100L800 250L1200 150L1200 300H0Z"
        fill="#e2e8f0"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
      />

      {/* Cabin */}
      <motion.g
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        transform="translate(100, 200) scale(0.15)"
      >
        {/* Cabin body */}
        <rect x="0" y="30" width="100" height="70" fill="#2d3748" />
        {/* Roof */}
        <polygon points="0,30 50,0 100,30" fill="#4a5568" />
        {/* Left window */}
        <motion.rect
          x="20"
          y="50"
          width="25"
          height="25"
          fill="#faf089"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        {/* Right window */}
        <motion.rect
          x="55"
          y="50"
          width="25"
          height="25"
          fill="#faf089"
          animate={{ opacity: [1, 0.7, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.g>

      {/* Trees */}
      {[...Array(7)].map((_, i) => (
        <motion.polygon
          key={i}
          points={`${150 + i * 150},280 ${180 + i * 150},240 ${210 + i * 150},280}`}
          fill="#2d3748"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
        />
      ))}
    </svg>
  );
};

export default MountainScene;