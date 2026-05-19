
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const ParticleField = () => {
  const count = 100;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        pos[i * 3] = (Math.random() - 0.5) * 20;
        pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
        pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#5A5A40" transparent opacity={0.3} sizeAttenuation />
    </points>
  );
};

const AbstractShape = ({ position, color, speed = 1, distort = 0.4 }: any) => {
  return (
    <Float speed={speed} rotationIntensity={1} floatIntensity={1}>
      <Sphere args={[1, 64, 64]} position={position} scale={0.5}>
        <MeshDistortMaterial
          color={color}
          speed={speed}
          distort={distort}
          radius={1}
          transparent
          opacity={0.1}
        />
      </Sphere>
    </Float>
  );
};

const Luxury3DBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none opacity-50">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#F5F2ED" />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        
        <AbstractShape position={[-5, 2, 0]} color="#5A5A40" speed={1.5} distort={0.5} />
        <AbstractShape position={[5, -2, -2]} color="#3E2723" speed={1.2} distort={0.4} />
        <AbstractShape position={[2, 4, -4]} color="#F5F2ED" speed={2} distort={0.3} />
        
        <ParticleField />
      </Canvas>
    </div>
  );
};

export default Luxury3DBackground;
