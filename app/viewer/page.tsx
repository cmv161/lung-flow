'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Html } from '@react-three/drei';
import { Suspense } from 'react';
import styles from './viewer.module.css';
import LungsModel from './LungsModel';

export default function ViewerPage() {
  return (
    <main className={styles.viewer}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Lung Flow</p>
        <h1 className={styles.title}>Interactive Lung Model</h1>
        <p className={styles.subhead}>Drag to rotate, scroll to zoom</p>
      </div>

      <div className={styles.canvas}>
        <Canvas camera={{ position: [0, 0, 2], fov: 50 }}>
          <Suspense
            fallback={
              <Html center>
                <h3 style={{ color: 'white', width: '200px' }}>Loading lungs...</h3>
              </Html>
            }
          >
            <ambientLight intensity={0.5} />
            <group position={[0, -0.2, 0]} scale={[3, 3, 3]}>
              <LungsModel />
            </group>

            <Environment preset="sunset" />
            <OrbitControls enablePan={false} target={[0, 0, 0]} maxDistance={4} />
          </Suspense>
        </Canvas>
      </div>
    </main>
  );
}
