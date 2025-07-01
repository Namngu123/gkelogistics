'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

export default function SceneCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight />
      <directionalLight position={[2, 2, 2]} />
      <Suspense fallback={null}>
        <mesh rotation={[0.5, 0.5, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="orange" />
        </mesh>
      </Suspense>
    </Canvas>
  );
}
