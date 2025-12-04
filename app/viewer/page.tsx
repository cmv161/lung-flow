'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Html } from '@react-three/drei';
import { Suspense, useState } from 'react';
import styles from './viewer.module.css';
import BreathingControls, {
  DEFAULT_AMPLITUDE,
  DEFAULT_AUTO_BREATHING,
  DEFAULT_BREATHS_PER_MINUTE,
} from './BreathingControls';
import LungsModel from './LungsModel';

export default function ViewerPage() {
  const [breathsPerMinute, setBreathsPerMinute] = useState(DEFAULT_BREATHS_PER_MINUTE);
  const [amplitude, setAmplitude] = useState(DEFAULT_AMPLITUDE);
  const [autoBreathing, setAutoBreathing] = useState(DEFAULT_AUTO_BREATHING);

  return (
    <main className={styles.viewer}>
      <div className={styles.header}>
        <div className={styles.headerText}>
          <p className={styles.eyebrow}>Lung Flow</p>
          <h1 className={styles.title}>Interactive Lung Model</h1>
          <p className={styles.subhead}>Drag to rotate, scroll to zoom</p>
        </div>

        <BreathingControls
          breathsPerMinute={breathsPerMinute}
          amplitude={amplitude}
          autoBreathing={autoBreathing}
          onBreathsPerMinuteChange={setBreathsPerMinute}
          onAmplitudeChange={setAmplitude}
          onAutoBreathingChange={setAutoBreathing}
        />
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
            <LungsModel
              breathsPerMinute={breathsPerMinute}
              amplitude={amplitude}
              autoBreathing={autoBreathing}
            />
            <Environment preset="sunset" />
            <OrbitControls enablePan={false} target={[0, 0, 0]} maxDistance={4} />
          </Suspense>
        </Canvas>
      </div>
    </main>
  );
}
