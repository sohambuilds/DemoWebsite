import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Box, Environment, PerspectiveCamera, OrbitControls, Stars, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { TextureLoader } from 'three/src/loaders/TextureLoader';

const IceCube = ({ position, logoUrl }) => {
  const meshRef = useRef();
  const [rotationSpeed] = useMemo(() => [
    new THREE.Vector3(Math.random() * 0.005, Math.random() * 0.005, Math.random() * 0.005)
  ], []);

  const logoTexture = useLoader(TextureLoader, logoUrl);

  useFrame((state) => {
    meshRef.current.rotation.x += rotationSpeed.x;
    meshRef.current.rotation.y += rotationSpeed.y;
    meshRef.current.rotation.z += rotationSpeed.z;
  });

  return (
    <Box ref={meshRef} position={position} args={[1, 1, 1]}>
      <meshPhysicalMaterial
        transmission={0.8}
        thickness={0.5}
        roughness={0.1}
        clearcoat={1}
        clearcoatRoughness={0.1}
        envMapIntensity={1.5}
        ior={1.4}
        color="#a8d8ff"
      />
      {[0, 1, 2, 3, 4, 5].map((idx) => (
        <mesh key={idx} position={[0, 0, 0.501]} rotation={[0, 0, (Math.PI / 2) * idx]}>
          <planeGeometry args={[0.8, 0.8]} />
          <meshBasicMaterial map={logoTexture} transparent opacity={0.9} />
        </mesh>
      ))}
    </Box>
  );
};

const RTXIceCubes = () => {
  const skills = [

    
  ];

  const cubePositions = useMemo(() => {
    return skills.map((_, index) => {
      const angle = (index / skills.length) * Math.PI * 2;
      const radius = 3;
      return [
        Math.cos(angle) * radius,
        Math.sin(angle) * radius,
        Math.random() * 2 - 1
      ];
    });
  }, [skills]);

  return (
    <div style={{ height: '600px', width: '100%' }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <color attach="background" args={['#05101c']} />
        <fog attach="fog" args={['#0a1929', 5, 15]} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={0.6} />
        <spotLight position={[-10, -10, -10]} angle={0.3} intensity={0.4} />
        
        {skills.map((skill, index) => (
          <IceCube key={skill} position={cubePositions[index]} logoUrl={skill} />
        ))}

        <Environment preset="night" />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      </Canvas>
    </div>
  );
};

export default RTXIceCubes