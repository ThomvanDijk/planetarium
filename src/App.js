import { Suspense } from 'react'
import { ARCanvas } from '@react-three/xr'
import { OrbitControls } from '@react-three/drei'

import Spaceship from './models/Spaceship'
import Ufo from './models/Ufo'
import Earth from './CelestialBodies/Earth'
import Moon from './CelestialBodies/Moon'

const earth_diameter = 0.4

export default function App() {
  return (
    <ARCanvas style={{height:900}}>
      <Suspense fallback={null}>
        {/* <pointLight position={[0, 200, 200]} intensity={2} color='#97ffff' /> */}
        <ambientLight intensity={1} />

        {/* The distance between earth and moon is NOT TO SCALE! */}
        <Earth position={[0, 0, -1]} diameter={earth_diameter}/>
        
        {/* The radius of the moon is 27 percent the size of earth*/}
        <Moon position={[-1, 0, -1]} diameter={earth_diameter * 0.27}/>

        <Spaceship position={[0, 0, -1]} scale={0.05}/>
        <Ufo position={[0, 0, -1]} scale={0.05}/>
        <OrbitControls/>
      </Suspense>
    </ARCanvas>
  )
}
