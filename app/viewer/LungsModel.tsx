import { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import type { Group } from 'three';

type LungsModelProps = {
  breathsPerMinute: number;
  amplitude: number;
  autoBreathing: boolean;
};

const MODEL_PATH = '/models/lungs/scene.gltf';
const BASE_SCALE = 5;
const BASE_POSITION_Y = -0.2;

export default function LungsModel({
  breathsPerMinute,
  amplitude,
  autoBreathing,
}: LungsModelProps) {
  const group = useRef<Group | null>(null);
  const { scene } = useGLTF(MODEL_PATH);

  useEffect(() => {
    if (!group.current) return;

    if (!autoBreathing) {
      group.current.scale.set(BASE_SCALE, BASE_SCALE, BASE_SCALE);
      group.current.position.set(0, BASE_POSITION_Y, 0);
    }
  }, [autoBreathing]);

  useFrame((state) => {
    if (!group.current || !autoBreathing) return;

    const time = state.clock.getElapsedTime();
    const breathsPerSecond = breathsPerMinute / 60;
    const phase = time * breathsPerSecond * Math.PI * 2;
    const breathFactor = 1 + amplitude * Math.sin(phase);

    const sx = BASE_SCALE * (1 + (breathFactor - 1) * 0.4);
    const sy = BASE_SCALE * (1 + (breathFactor - 1) * 0.9);
    const sz = BASE_SCALE * (1 + (breathFactor - 1) * 0.4);

    const posY = BASE_POSITION_Y - (breathFactor - 1) * 0.05;

    group.current.scale.set(sx, sy, sz);
    group.current.position.set(0, posY, 0);
  });

  return (
    <group
      ref={group}
      position={[0, BASE_POSITION_Y, 0]}
      scale={[BASE_SCALE, BASE_SCALE, BASE_SCALE]}
    >
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload(MODEL_PATH);
