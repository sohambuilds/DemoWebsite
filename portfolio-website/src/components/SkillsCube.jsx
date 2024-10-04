import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Text } from '@react-three/drei';

const SkillFace = ({ position, rotation, skill }) => (
  <Box position={position} rotation={rotation} args={[2, 2, 0.1]}>
    <meshStandardMaterial attach="material" color="#3b82f6" />
    <Text
      position={[0, 0, 0.06]}
      fontSize={0.3}
      color="#ffffff"
      anchorX="center"
      anchorY="middle"
    >
      {skill}
    </Text>
  </Box>
);

const RotatingCube = () => {
  const cubeRef = useRef();

  useFrame(() => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x += 0.005;
      cubeRef.current.rotation.y += 0.005;
    }
  });

  const skills = ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy'];

  return (
    <group ref={cubeRef}>
      <SkillFace position={[0, 0, 1]} rotation={[0, 0, 0]} skill={skills[0]} />
      <SkillFace position={[0, 0, -1]} rotation={[0, Math.PI, 0]} skill={skills[1]} />
      <SkillFace position={[-1, 0, 0]} rotation={[0, Math.PI / 2, 0]} skill={skills[2]} />
      <SkillFace position={[1, 0, 0]} rotation={[0, -Math.PI / 2, 0]} skill={skills[3]} />
      <SkillFace position={[0, 1, 0]} rotation={[-Math.PI / 2, 0, 0]} skill={skills[4]} />
      <SkillFace position={[0, -1, 0]} rotation={[Math.PI / 2, 0, 0]} skill={skills[5]} />
    </group>
  );
};

const SkillsCube = () => {
  return (
    <div style={{ height: '400px', width: '100%' }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <RotatingCube />
      </Canvas>
    </div>
  );
};

export default SkillsCube;