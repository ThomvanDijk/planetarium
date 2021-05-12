import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
// import { ARCanvas } from '@react-three/xr'
import { OrbitControls, useTexture, Sphere } from '@react-three/drei'

import moon_texture from './assets/textures/moon.png'
import earth_texture from './assets/textures/earth.jpeg'

function Moon(props) {
  const texture = useTexture(moon_texture)

  return (
    <>
      {/* <ambientLight intensity={0.2} />
      <directionalLight /> */}
      <Sphere {...props} args={[1, 32, 32]} >
        <meshBasicMaterial map={texture} />
      </Sphere>
    </>
  )
}

function Earth() {
  const texture = useTexture(earth_texture)

  return (
    <>
      {/* <ambientLight intensity={0.2} />
      <directionalLight /> */}
      <Sphere args={[4, 32, 32]} >
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
        <Moon position={[2, 2, 2]}/>
        <Earth />
        <OrbitControls/>
      </Suspense>
    </Canvas>
  );
}

export default App;
