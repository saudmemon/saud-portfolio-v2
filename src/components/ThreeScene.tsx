import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function StarField(props: any) {
  const ref = useRef<THREE.Points>(null!);
  
  const sphere = useMemo(() => {
    const data = new Float32Array(4000 * 3);
    for (let i = 0; i < 4000; i++) {
      const stride = i * 3;
      const r = 1.2 + Math.random() * 0.4;
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      
      data[stride] = r * Math.sin(phi) * Math.cos(theta);
      data[stride + 1] = r * Math.sin(phi) * Math.sin(theta);
      data[stride + 2] = r * Math.cos(phi);
    }
    return data;
  }, []);

  useFrame((_state: any, delta: number) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 20;
      ref.current.rotation.y -= delta / 25;
    }
  });

  return React.createElement('group', { rotation: [0, 0, Math.PI / 4] },
    React.createElement(Points as any, { ref: ref, positions: sphere, stride: 3, frustumCulled: false, ...props },
      React.createElement(PointMaterial as any, {
        transparent: true,
        color: "#B28135",
        size: 0.003,
        sizeAttenuation: true,
        depthWrite: false,
        opacity: 0.6
      })
    )
  );
}

export const ThreeScene = () => {
  return (
    <div className="fixed inset-0 -z-50 pointer-events-none opacity-30">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <StarField />
      </Canvas>
    </div>
  );
};
