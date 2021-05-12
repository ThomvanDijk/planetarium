import { Canvas, useFrame } from '@react-three/fiber'
import { Suspense, useRef } from 'react'
// import { ARCanvas } from '@react-three/xr'
import { OrbitControls, useTexture, Sphere } from '@react-three/drei'

import moon_texture from './assets/textures/moon.png'
import earth_texture from './assets/textures/earth.jpg'
import earth_clouds_texture from './assets/textures/earth_clouds.jpg'

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
  const clouds_texture = useTexture(earth_clouds_texture)

  const ref = useRef()

  useFrame(() => {
    ref.current.rotation.x = ref.current.rotation.y += 0.00001
  })

  return (
    <>
      {/* <ambientLight intensity={0.2} />
      <directionalLight /> */}
      <Sphere args={[4, 64, 64]} >
        <meshBasicMaterial map={texture}/>
      </Sphere>
      <Sphere ref={ref} args={[4.05, 64, 64]} >
        <meshBasicMaterial alphaMap={clouds_texture} transparent/>
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
        <Moon position={[4, 4, 4]}/>
        <Earth />
        <OrbitControls/>
      </Suspense>
    </Canvas>
  );
}

export default App;
