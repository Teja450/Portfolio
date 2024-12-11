// src/ThreeDModel.js
import { Canvas } from '@react-three/fiber';
import { Suspense, useRef } from 'react';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Model({ path }) {
  const { scene } = useGLTF(path); // Load your .glb model

  return <primitive object={scene} scale={1} position={[0, 0, 0]} />;
}

function ThreeDModel() {
  return (
    <div className="threeDModelContainer" style={{ height: '500px', width: '100%' }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        {/* Adding lighting */}
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} intensity={1} />
        <Suspense fallback={<div>Loading...</div>}>
          <Model path="/path-to-your-3d-model.glb" /> {/* Replace with your model's path */}
        </Suspense>
        <OrbitControls /> {/* Adds mouse controls to rotate the scene */}
      </Canvas>
    </div>
  );
}

export default ThreeDModel;
