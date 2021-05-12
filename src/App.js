import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
// import { ARCanvas } from '@react-three/xr'
import { OrbitControls, useTexture, Sphere } from '@react-three/drei'

import moon_texture from './assets/textures/moon.png';

function Moon() {
  const texture = useTexture(moon_texture)

  return (
    <>
      {/* <ambientLight intensity={0.2} />
      <directionalLight /> */}
      <Sphere args={[1, 32, 32]} >
        <meshBasicMaterial map={texture} />
      </Sphere>
    </>
  )
}

function App() {
  return (
    <Canvas>
      {/* <ambientLight /> */}
      {/* <pointLight position={[10, 10, 10]} /> */}
      <Suspense fallback={null}>
        <Moon />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}

export default App;
