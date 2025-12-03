import { useGLTF } from '@react-three/drei';
const MODEL_PATH = '/models/lungs/scene.gltf';

export default function LungsModel() {
  const { scene } = useGLTF(MODEL_PATH);
  return <primitive object={scene} />;
}

useGLTF.preload(MODEL_PATH);
