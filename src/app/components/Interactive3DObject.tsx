'use client';

import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, TorusKnot } from '@react-three/drei';
import * as THREE from 'three'; // Explicitly import THREE

const RotatingTorusKnot = () => {
  const meshRef = useRef<THREE.Mesh>(null!); // Now THREE.Mesh should be recognized
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.1;
      meshRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <TorusKnot
      ref={meshRef}
      args={[1, 0.3, 128, 16]}
      scale={hovered ? 1.1 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <meshStandardMaterial
        color={hovered ? 'hotpink' : 'mediumpurple'}
        wireframe={false}
        metalness={0.8}
        roughness={0.2}
      />
    </TorusKnot>
  );
};

const Interactive3DObject = () => {
  return (
    <div className='w-full h-64 md:h-80 lg:h-96 my-8'>
      <Canvas camera={{ position: [0, 0, 3.5], fov: 50 }}>
        <ambientLight intensity={Math.PI / 2} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />

        <RotatingTorusKnot />

        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};

export default Interactive3DObject;
