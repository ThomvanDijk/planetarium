import { useFrame, Canvas } from '@react-three/fiber'
import { Suspense, useRef } from 'react'
// import { ARCanvas } from '@react-three/xr'
import { OrbitControls, useTexture, Sphere, useGLTF } from '@react-three/drei'

import Spaceship from './Spaceship'
import Ufo from './Ufo'

const earth_diameter = 0.4

function Moon(props) {
  const texture = useTexture('assets/textures/moon.png')

  // The radius of the moon is 27 percent the size of earth
  const diameter = earth_diameter * 0.27

  return (
    <Sphere {...props} args={[diameter, 32, 32]} >
      <meshBasicMaterial map={texture} />
    </Sphere>
  )
}

function Earth(props) {
  const texture = useTexture('assets/textures/earth.jpg')
  const clouds_texture = useTexture('assets/textures/earth_clouds.jpg')

  // Cloud height is around 12 km at it's highest point.
  // Earths diameter is 12,756 km at the equator.
  // Magnification factor is: (12,756 + 24) / 12,756 = 1,001881467544685
  const cloud_diameter = earth_diameter * 1.001881467544685

  const ref = useRef()

  useFrame(() => {
    // Rotation of clouds with a random unrealistic speed
    ref.current.rotation.x = ref.current.rotation.y += 0.0002
  })

  return (
    <>
      <Sphere {...props} args={[earth_diameter, 64, 64]} >
        <meshBasicMaterial map={texture}/>
      </Sphere>
      <Sphere {...props} ref={ref} args={[cloud_diameter, 64, 64]} >
        <meshBasicMaterial alphaMap={clouds_texture} transparent/>
      </Sphere>
    </>
  )
}

function Model(props) {
  const { nodes, materials } = useGLTF('low_poly_rock/scene.gltf')
  const texture = useTexture('low_poly_rock/textures/lambert1_baseColor.png')

  return (
    // <primitive object={gltf.scene} />
    <mesh geometry={nodes.pCube1_lambert1_0.geometry} material={materials.lambert1} >
      <meshBasicMaterial attach="material" map={texture} />
    </mesh>
  )
}

function App() {
  return (
    <Canvas style={{height:900}}>
      <Suspense fallback={null}>
        {/* <pointLight position={[0, 200, 200]} intensity={2} color='#97ffff' /> */}
        <ambientLight intensity={1} />

        {/* The distance between earth and moon is NOT TO SCALE! */}
        <Moon position={[-1, 0, -1]}/>
        <Earth position={[0, 0, -1]}/>

        <Spaceship position={[0, 0, -1]} scale={0.1}/>
        <Ufo position={[0, 0, -1]} scale={0.05}/>
        <OrbitControls/>
      </Suspense>
    </Canvas>
  )
}

export default App
